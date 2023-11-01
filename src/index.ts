import app from "./server";
import config from "./config/config";

const PORT = config.app.PORT

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
})

// const httpServer = createServer((req, res) => {
//     console.log(req.method)
//     console.log(req.url)
//     console.log(req.headers)

//     let data = ""
//     let chunkIndex = 0
//     req.on("data", (chunk) => {
//         data += chunk
//         chunkIndex++
//         console.log(chunkIndex)
//     })

//     req.on("end", () => {
//         console.log(data)
//     })

//     res.end("Recibido tron")
// })

// httpServer.listen(PORT)

