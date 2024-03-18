
import React, { useContext } from 'react'
import CounterContext from '../context/CounterContext'

const CounterDisplay = () => {
  const {count} = useContext(CounterContext)
  return (
    <div>
      <p>CounterDisplay {count}</p>
    </div>
  )
}

export default CounterDisplay