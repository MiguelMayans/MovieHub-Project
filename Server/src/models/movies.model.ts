import { Schema, model } from "mongoose";
import GenreModel, { IGenreDocument } from "./genre.model";

export interface IMovieDocument extends Document {
    name: string,
    posterImage: string,
    score: number,
    genre: IGenreDocument
}

const MovieSchema = new Schema<IMovieDocument>(
    {
        name: { type: String, required: true },
        posterImage: { type: String, required: true, unique: true },
        score: { type: Number, min: 0, max: 10 },
    })

const MovieModel = model("movies", MovieSchema)

export default MovieModel