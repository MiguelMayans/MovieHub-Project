import { Router } from "express";
import { createMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from "../controllers/movies.controller";

const moviesRoutes = Router()

moviesRoutes.get("/:userId", getAllMovies)

moviesRoutes.get("/:movieId", getMovieById)

moviesRoutes.post("/:userId", createMovie)

moviesRoutes.patch("/:userId/:movieId", updateMovie)

moviesRoutes.delete("/:userId/:movieId", deleteMovie)

export default moviesRoutes