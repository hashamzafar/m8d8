import express from 'express';
import { createServer } from 'http';
import { Server } from "socket.io"
import cors from 'cors';
import listEndpoints from "express-list-endpoints"
import UserRouter from "./users/user.js"

const app = express();
app.use(cors())
app.use(express.json())


app.use('/users', UserRouter)


const httpServer = createServer(app)

const io = new Server(httpServer, { allowEIO3: true })

io.on("connection", socket => {
    console.log(socket.id)
    socket.on("my-event", () => {
        console.log('whatever')
    })
})

httpServer.listen(3003, () => {
    console.log("server listening on port 3003")
    console.table(listEndpoints(app))
})




