import { Schema, model, Document } from "mongoose";
import GenreModel, { IGenreDocument } from "./genre.model";

export interface IMovieDocument extends Document {
    name: string,
    posterImage: string,
    score: number,
    // genre: IGenreDocument,
    createdAt: Date,
    updatedAt: Date
}

const MovieSchema = new Schema<IMovieDocument>(
    {
        name: { type: String, required: true },
        posterImage: { type: String, required: true, unique: true },
        score: { type: Number, min: 0, max: 10 },
    }, { timestamps: true, versionKey: false }
)

const MovieModel = model("Movie", MovieSchema)

export default MovieModel