import { Request, Response } from "express"
import { prismaClient } from "../db/client"

export const getAllUsers = async (req: Request, res: Response) => {

    try {
        const allUsers = await prismaClient.user.findMany({ include: { movies: { include: { genre: true } } } })

        res.status(200).json(allUsers)

    } catch (error) {

        res.status(500).json(error)
    }

}

export const createUser = async (req: Request, res: Response) => {

    const { name, email, password } = req.body

    try {
        if (!name || !email || !password) throw new Error("Missing fields")
        const newUser = await prismaClient.user.create({ data: { name, email, password } })

        res.status(201).json(newUser)
    }
    catch (error) {

        res.status(500).json(error)
    }
}

export const getUserById = async (req: Request, res: Response) => {

    const { userId } = req.params

    try {
        const user = await prismaClient.user.findUnique({ where: { id: userId }, include: { movies: { include: { genre: true } } } })

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
        const user = await prismaClient.user.update({ where: { id: userId }, data: { name: name, email: email } })

        res.status(201).json(user)
    }
    catch (error) {

        res.status(500).json(error)
    }

}

export const deleteUser = async (req: Request, res: Response) => {

    const { userId } = req.params

    try {
        const user = await prismaClient.user.delete({ where: { id: userId } })

        res.status(204).json(user)
    }
    catch (error) {

        res.status(500).json(error)
    }

}