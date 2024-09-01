import { useEffect, useMemo, useState } from 'react'
import { io } from 'socket.io-client'
import './App.css'


function App() {
  const socket = useMemo(()=>io('http://localhost:3000'),[])
  const [message, setMessage] = useState('')

  useEffect(()=>{
   socket.on('connect',()=>{
    console.log('Connected', socket.id)
    socket.on('welcome',(msg)=>{
      console.log(msg)
    })
    socket.on('recieve-message',(data)=>(
      console.log(data)
    ))
    // return()=>{
    //   socket.disconnect();
    // }
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
