
import React, { useContext, useState } from 'react'
import CounterContext from '../context/CounterContext'

const CounterButton = () => {

     const {increment} = useContext(CounterContext)

  return (
   <div>
     <button onClick={increment}>Add 1 Item</button>
    </div>
  )
}

export default CounterButton