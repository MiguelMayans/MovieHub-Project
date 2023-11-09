import express, { Request, Response } from "express"
import userRoutes from "./routes/user.routes"
import helmet from "helmet";
import morgan from "morgan"
import moviesRoutes from "./routes/movie.routes";

const app = express()

app.use(express.json())
app.use(helmet())
app.use(morgan("tiny"))

app.use("/user", userRoutes)
app.use("/movies", moviesRoutes)

export default app