
import React, { useContext, useState } from 'react'
import TaskContext from '../context/TaskContext'

export default function TaskForm() {
 
    const {addTask} = useContext(TaskContext)
    const [taskName,setTaskName] = useState('')
 
      const handleSubmit =(e)=>{
        e.preventDefault()
         if(!taskName.trim()) return;
         addTask({id:Math.random(), name:taskName, completed:false})
         setTaskName('')
      }




  return (
    <div  >
      <form onSubmit ={handleSubmit}>

            <input
             type='text'
             placeholder='add task'
               value={taskName}
               onChange={(e)=> setTaskName(e.target.value)}
             />

        <button type="submit">ADD</button>     
      </form>
    </div>
  )
}
