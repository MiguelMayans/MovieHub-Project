import GenreModel from "../models/genre.model"
import { Request, Response } from "express"
import MovieModel from "../models/movies.model"

export const createGenre = async (req: Request, res: Response) => {

    const { name } = req.body
    const { movieId } = req.params

    try {
        if (!name) throw new Error("Missing fields")

        const genre = await GenreModel.create({ name, movie: movieId })

        await MovieModel.findByIdAndUpdate({ _id: movieId }, { $push: { genre: genre._id } })

        res.status(201).json(genre)
    }
    catch (error) {

        res.status(500).json(error)
    }
}

export const deleteGenre = async (req: Request, res: Response) => {

    const { genreId } = req.params

    try {
        const genre = await MovieModel.findByIdAndDelete({ _id: genreId })

        res.status(200).json(genre)
    }
    catch (error) {

        res.status(500).json(error)
    }

}
