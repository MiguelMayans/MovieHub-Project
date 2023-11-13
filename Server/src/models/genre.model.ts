import { Schema, model } from "mongoose";

export interface IGenreDocument extends Document {
    name: string,
    movie?: string[]
    createdAt?: Date,
    updatedAt?: Date
}

const GenreSchema = new Schema<IGenreDocument>(
    {
        name: { type: String, required: true },
        movie: [{ type: Schema.Types.ObjectId, ref: "Movie" }]

    }, { timestamps: true, versionKey: false }
)

const GenreModel = model("Genre", GenreSchema)

export default GenreModel