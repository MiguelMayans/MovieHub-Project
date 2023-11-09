import { Router } from "express";
import { createMovie } from "../controllers/movies.controller";

const moviesRoutes = Router()

moviesRoutes.post("/:userId", createMovie)

export default moviesRoutes