import { Schema, model } from "mongoose";
import Movie from "./movies";

const GenreSchema = new Schema(
    {
        id: { type: String, required: true, unique: true },
        name: { type: String, required: true },
    })

const Genre = model("genres", GenreSchema)

export default Genre