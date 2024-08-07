import React, { useState } from 'react'

import { useDispatch } from 'react-redux';
import { addTodo } from '../store/todoSlice';
function ToDoForm() {
    
  const [input, setInput]=useState("");

  const dispatch=useDispatch()
  const add=(e)=>{
    e.preventDefault()
    dispatch(addTodo(input))
    setInput('')


  }



  return (
     <form className='flex' onSubmit={add}>
      <input 
      className='w-full  border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5'
       type='text' placeholder='Write the tasks'
       value={input}
      onChange={(e)=>setInput(e.target.value)}
      />
      <button className=' rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0'
      type='submit' >Add</button>
     </form>
  )
}

export default ToDoForm