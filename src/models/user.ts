import { Schema, model } from "mongoose";
import Movie from "./movies";

const UserSchema = new Schema(
    {
        id: { type: String, required: true, unique: true },
        name: { type: String, required: true },
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true },
        movies: Movie
    })

const User = model("users", UserSchema)

export default User