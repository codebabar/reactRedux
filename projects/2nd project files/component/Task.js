

import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'

export default function Task({task}) {
 const {deleteTask,toggleTaskCompletion} = useContext(TaskContext)
    


  return (
    <div style={{width:300,margin:10, display:'flex',justifyContent:'space-between'}}>     
       <input type='checkbox' checked ={task.completed}
          onChange={()=>toggleTaskCompletion(task.id)}/>
          <span style={{textDecoration: task.completed ? 'line-through':'none' }} >{task.name}</span>
          <button onClick={()=> deleteTask(task.id)}>Delete</button>
    </div>
  )
}
