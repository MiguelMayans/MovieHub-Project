import { Router } from "express";

import { createUser, deleteUser, getAllUsers, updateUser, getUserById } from "../controllers/user.controllers";
import { checkJwtMiddleware } from "../middleware/checkJwt.middleware";

const userRoutes = Router()

userRoutes.get("/", checkJwtMiddleware, getAllUsers)

userRoutes.get("/:userId", checkJwtMiddleware, getUserById)

userRoutes.post("/", createUser)

userRoutes.patch("/:userId", checkJwtMiddleware, updateUser)

userRoutes.delete("/:userId", checkJwtMiddleware, deleteUser)

export default userRoutes