import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import './App.css'

function App() {
 const socket = io('http://localhost:3000')
  useEffect(()=>{
   socket.on('connect',()=>{
    console.log('Connected', socket.id)
    socket.on('welcome',(msg)=>{
      console.log(msg)
    })
   })
  },[]) 

  return (
   <div>

   </div>
  )
}

export default App
