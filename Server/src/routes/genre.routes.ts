import { Router } from "express";
import { createGenre, deleteGenre } from "../controllers/genre.controller";

const genreRoutes = Router()

genreRoutes.post("/:userId/:movieId", createGenre)

genreRoutes.delete("/:userId/:movieId(:genreId", deleteGenre)

export default genreRoutes