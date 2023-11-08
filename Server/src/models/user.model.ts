import { Schema, model, Document } from "mongoose";
import MovieModel from "./movies.model";

interface IUserDocument extends Document {
    name: string,
    email: string,
    password: string,
    movies?: string[],
    createdAt?: Date,
    updatedAt?: Date
}

const UserSchema = new Schema<IUserDocument>(
    {
        name: { type: String, required: [true, "Name is required"] },
        email: { type: String, required: [true, "Email is required"], unique: true },
        password: { type: String, required: [true, "Password is required"] },
    }, { timestamps: true, versionKey: false }
)

const UserModel = model("User", UserSchema)

export default UserModel