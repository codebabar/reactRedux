
import React, { createContext, useState } from 'react'

const TaskContext = createContext();

export const TaskProvider = ({children})=>{
     const [tasks,setTasks] = useState([]);

     const addTask = (task)=>{
        setTasks([...tasks,task])
     console.log(tasks);

     }
    const deleteTask = (id)=>{
        setTasks(tasks.filter(tasks=>  tasks.id !== id))
    } 

   const toggleTaskCompletion = (id) =>{
    setTasks(
      tasks.map((task)=>
       task.id === id ? {...task , completed: !task.completed}
       : task
      ))
   }
  
    return <TaskContext.Provider value={{tasks,addTask,deleteTask,toggleTaskCompletion}}>
        {children}
    </TaskContext.Provider>

}

export default TaskContext