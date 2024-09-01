import { useEffect, useState } from 'react'
import { io } from 'socket.io-client'
import './App.css'

function App() {
  const [message, setMessage] = useState('')
 const socket = io('http://localhost:3000')
  useEffect(()=>{
   socket.on('connect',()=>{
    console.log('Connected', socket.id)
    socket.on('welcome',(msg)=>{
      console.log(msg)
    })
    return()=>{
      socket.disconnect();
    }
   })
  },[]) 
  
   const  handleSubmit=(e)=>{
        e.preventDefault()
        socket.emit('message',message)
   }

  return (
   <div>
     <form onSubmit={handleSubmit} >
     <input 
     type="text" 
     placeholder='send message'
     value={message} 
     onChange={(e)=>setMessage(e.target.value)} 
     />
     <button type='submit' >Send</button>
     </form>
   </div>
  )
}

export default App
