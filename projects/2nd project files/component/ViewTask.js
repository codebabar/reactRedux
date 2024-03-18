

import React, { useContext } from 'react'
import TaskContext from '../context/TaskContext'
import Task from './Task'

export default function ViewTask() {

     const {tasks} = useContext(TaskContext)
     

  return (
    <div >
       <h1>Your List</h1>
       {
        tasks.map((item)=>(
            <div>
                <Task  key={item.id} task={item} />
            </div>    
        ))
       }
    </div>
  )
}
