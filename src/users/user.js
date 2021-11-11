import express from 'express';
import { RoomModel } from './model.js';


const UserRouter = express.Router();


UserRouter.get('/online-users', (req, res) => {
    res.send({ onlineUsers })
})

UserRouter.get('/chat/:room', async (req, res) => {
    const room = await RoomModel.findOne({ name: req.params.room })

    if (!room) {
        res.status(404).send()
        return
    }

    res.send(room.chatHistory)
})


export default UserRouter