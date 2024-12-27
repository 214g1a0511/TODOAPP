import React, { useEffect, useRef, useState } from 'react'
import icon from '../assets/todo_icon.png'
import TodoItems from './TodoItems'
import { data } from 'autoprefixer';
export const Todo = () => {
  const [todoList,setTodoList]=useState(localStorage.getItem("todos")?JSON.parse(localStorage.getItem("todos")):[]);

  const inputRef=useRef();
  const add=()=>{
    const inputText=inputRef.current.value.trim();
    if (inputText===""){
      return null;
    }
    const newTodo={
      id:Date.now(),
      text:inputText,
      isComplete:false,
    }
    setTodoList((prev)=>[...prev,newTodo])
    inputRef.current.value="";


    }
    const deleteTodo=(id)=>{
      setTodoList((prvTodos)=>{
           return prvTodos.filter((todo)=>
            todo.id!==id
          )

      })
    }
    const toggle=(id)=>{
      setTodoList((prevTodos)=>{
        return prevTodos.map((todo)=>{
          if(todo.id===id){
            return {...todo,isComplete:!todo.isComplete}
          }
          return todo
        })
      })
    }
useEffect(()=>{
  localStorage.setItem("todos",JSON.stringify(todoList))
},[todoList])
  
  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
        {/*----------title---------*/}
        <div className='flex items-center mt-7 gap-2'>
            <img className='w-8' src={icon}/>
            <h1 className='text-3xl font-semibold'>To-do List</h1>

        </div>
                {/*----------input---------*/}

        <div className='flex items-center my-7 bg-gray-50 rounded-full'>
            <input ref={inputRef} className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-300" type="text" placeholder='add To-do'></input>
            <button onClick={add} className='bg-orange-600 rounded-full p-5 pl-6 border-none text-lg font-medium cursor-pointer'>Add +</button>
        </div>
                {/*----------todos---------*/}
                {todoList.map((item,index)=>{
                  return <TodoItems key={index} text={item.text} id={item.id} isComplete={item.isComplete} deleteTodo={deleteTodo} toggle={toggle}/>

                })}
                


        <div>

        </div>
    </div>
  )
}
export default Todo