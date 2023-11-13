import MovieModel from "../models/movies.model";
import UserModel from "../models/user.model";
import { Request, Response } from "express"

export const getAllMovies = async (req: Request, res: Response) => {

    try {
        const allMovies = await MovieModel.find()

        res.status(200).json(allMovies)

    } catch (error) {

        res.status(500).json(error)
    }

}
export const getMovieById = async (req: Request, res: Response) => {

    const { movieId } = req.params

    try {
        const user = await MovieModel.findById({ _id: movieId })

        res.status(200).json(user)
    }
    catch (error) {

        res.status(500).json(error)
    }
}

export const createMovie = async (req: Request, res: Response) => {

    const { name, score, posterImage, genre } = req.body
    const { userId } = req.params

    try {
        if (!name || !score || !posterImage) throw new Error("Missing fields")
        const movie = await MovieModel.create({ name, score, posterImage, genre, userId })

        await UserModel.findByIdAndUpdate(
            { _id: userId },
            { $push: { movies: movie._id } }
        )

        res.status(201).json(movie)

    } catch (error) {
        res.status(500).json(error)
    }
}

export const updateMovie = async (req: Request, res: Response) => {

    const { movieId } = req.params
    const { name, score, posterImage, genre } = req.body

    try {
        const movie = await UserModel.findByIdAndUpdate({ _id: movieId }, { $set: { name: name, score: score, posterImage: posterImage, genre: genre } }, { new: true })

        res.status(201).json(movie)
    }
    catch (error) {

        res.status(500).json(error)
    }

}

export const deleteMovie = async (req: Request, res: Response) => {

    const { movieId } = req.params

    try {
        const user = await MovieModel.findByIdAndDelete({ _id: movieId })

        res.status(200).json(user)
    }
    catch (error) {

        res.status(500).json(error)
    }

}