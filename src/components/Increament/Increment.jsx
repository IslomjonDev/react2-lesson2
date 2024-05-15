import React from 'react'
import { useDispatch } from 'react-redux'
import { inc } from '../../context/counterSlice'

const Increment = () => {

  let dispetch = useDispatch()

  return (
    <>
    <button onClick={() => dispetch(inc())}>Increment</button>
    </>
  )
}

export default Increment