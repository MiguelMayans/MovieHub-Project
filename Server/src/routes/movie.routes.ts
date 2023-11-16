import { Router } from "express";
import { createMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from "../controllers/movies.controller";
import { checkJwtMiddleware } from "../middleware/checkJwt.middleware";

const moviesRoutes = Router()

moviesRoutes.get("/:userId", checkJwtMiddleware, getAllMovies)

moviesRoutes.get("/:movieId", checkJwtMiddleware, getMovieById)

moviesRoutes.post("/:userId", checkJwtMiddleware, createMovie)

moviesRoutes.patch("/:userId/:movieId", checkJwtMiddleware, updateMovie)

moviesRoutes.delete("/:userId/:movieId", checkJwtMiddleware, deleteMovie)

export default moviesRoutes