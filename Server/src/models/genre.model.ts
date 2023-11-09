import { Schema, model } from "mongoose";
import MovieModel, { IMovieDocument } from "./movies.model";

export interface IGenreDocument extends Document {
    name: string,
}


const GenreSchema = new Schema<IGenreDocument>(
    {
        name: { type: String, required: true },

    })

const GenreModel = model("genres", GenreSchema)

export default GenreModel