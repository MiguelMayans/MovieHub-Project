import { Router } from "express";
import { createGenre, deleteGenre, getGenreById } from "../controllers/genre.controller";
import { checkJwtMiddleware } from "../middleware/checkJwt.middleware";

const genreRoutes = Router()

genreRoutes.post("/:userId/:movieId", checkJwtMiddleware, createGenre)

genreRoutes.get("/:userId/:movieId/:genreId", checkJwtMiddleware, getGenreById)

genreRoutes.delete("/:userId/:movieId/:genreId", checkJwtMiddleware, deleteGenre)


export default genreRoutes