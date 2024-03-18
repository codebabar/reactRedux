import React, { createContext, useState } from 'react'

const CounterContext  =createContext()

export  const ConuterProvider  = ({children})=>{
    const [count,setCounter] = useState(0)

    const increment = ()=>{
         setCounter(count  +1 )
    }

    return(<CounterContext.Provider value={{count,increment}}>
        {children}
    </CounterContext.Provider>)
    

}

export default CounterContext