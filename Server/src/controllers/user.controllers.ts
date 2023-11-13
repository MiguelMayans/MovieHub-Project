import { Request, Response } from "express"
import UserModel from "../models/user.model"
import prisma from "../db/client"

export const getAllUsers = async (req: Request, res: Response) => {

    try {
        const allUsers = await UserModel.find().populate({ path: "movies", populate: { path: "genre" } })

        res.status(200).json(allUsers)

    } catch (error) {

        res.status(500).json(error)
    }

}

export const createUser = async (req: Request, res: Response) => {

    const { name, email, password } = req.body

    try {
        if (!name || !email || !password) throw new Error("Missing fields")
        const newUser = await prisma.user.create({ data: { name, email, password } })

        res.status(201).json(newUser)
    }
    catch (error) {

        res.status(500).json(error)
    }
}

export const getUserById = async (req: Request, res: Response) => {

    const { userId } = req.params

    try {
        const user = await UserModel.findById({ _id: userId }).populate({ path: "movies", populate: { path: "genre" } })

        res.status(200).json(user)
    }
    catch (error) {

        res.status(500).json(error)
    }
}

export const updateUser = async (req: Request, res: Response) => {

    const { userId } = req.params
    const { name, email } = req.body

    try {
        const user = await UserModel.findByIdAndUpdate({ _id: userId }, { $set: { name: name, email: email } }, { new: true })

        res.status(201).json(user)
    }
    catch (error) {

        res.status(500).json(error)
    }

}

export const deleteUser = async (req: Request, res: Response) => {

    const { userId } = req.params

    try {
        const user = await UserModel.findByIdAndDelete({ _id: userId })

        res.status(200).json(user)
    }
    catch (error) {

        res.status(500).json(error)
    }

}