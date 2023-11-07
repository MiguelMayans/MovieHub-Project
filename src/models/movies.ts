import { Schema, model } from "mongoose";
import Genre from "./genre";

const MovieSchema = new Schema(
    {
        id: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        posterImage: { type: String, required: true, unique: true },
        score: Number,
        genre: Genre
    })

const Movie = model("movies", MovieSchema)

export default Movie