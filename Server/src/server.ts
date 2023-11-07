import express, { Request, Response } from "express"
import userRoutes from "./routes/user.routes"
import helmet from "helmet";
import morgan from "morgan"

const app = express()

app.use(express.json())
app.use(helmet())
app.use(morgan("tiny"))

app.use("/user", userRoutes)

export default app