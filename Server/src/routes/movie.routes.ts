import { Router } from "express";
import { createMovie, deleteMovie, getAllMovies } from "../controllers/movies.controller";

const moviesRoutes = Router()

moviesRoutes.get("/userId", getAllMovies)

moviesRoutes.post("/:userId", createMovie)

moviesRoutes.delete("/:userId", deleteMovie)

export default moviesRoutes