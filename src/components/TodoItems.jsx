import React from 'react'
import tick from'../assets/tick.png'
import nontick from '../assets/not_tick.png'
import delete_icon from '../assets/delete.png'

export const TodoItems = ({text,id,isComplete,deleteTodo,toggle}) => {
  return (
    <div className='flex items-center my-3 gap-2'>
        <div onClick={()=>{toggle(id)}} className='flex flex-1 items-center cursor-pointer'>
            <img src={ isComplete? tick: nontick} className='w-7'/>
            <h1 className={`text-slate-700 ml-4 text-[17px] ${isComplete?"line-through":""}`}>{text}</h1>

        </div>
        <img onClick={()=>{deleteTodo(id)}} className="w-4 cursor-pointer" src={delete_icon}/>
    </div>
  )
}
export default TodoItems
