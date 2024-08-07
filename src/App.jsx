import { useState } from 'react'
import ToDoForm from './components/ToDoForm'
import ToDoitem from './components/ToDoitem'
import './App.css'

import { useSelector, useDispatch } from "react-redux";
function App() {
  const todos =useSelector((state)=>state.todos)


  return (
    <>
      <div className='bg-[#3b1553] min-h-screen py-8 '>
        <div className='w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white'>
        <h1 className ="text-3xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>

        <div className="mb-4">
                        {/* Todo form goes here */} 
                        <ToDoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                       {todos.map((todo)=>(
                        <div key={todo.id}
                        className='w-full'
                        >
                          <ToDoitem todo={todo} />
                        </div>
                       ))}
                        
                    </div>
        </div>

        
      </div>
     
     
     
    </>
  )
}

export default App
