import express from 'express'
import { Server } from 'socket.io'
import { createServer } from 'http'
import cors from 'cors'
const app = express()

const port = 3000
const server =  createServer(app)

const io = new Server(server,{
    cors:{
        origin:'http://localhost:5173',
        credentials:true,
        methods:['GET','POST']
    }
});

app.use(cors())

io.on('connection',(socket)=>{
  console.log("User Connected")
  console.log("Id",socket.id)
  socket.emit('welcome','Welcome to the server')
})



app.get('/',(req,res)=>{
   res.json({
    message:'Its working'
   })
})

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})