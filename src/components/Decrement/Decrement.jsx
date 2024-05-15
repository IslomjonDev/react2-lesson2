import React from 'react'
import { useDispatch } from 'react-redux'
import {dec} from '../../context/counterSlice'
import { useSelector } from 'react-redux'
const Decrement = () => {

  let dispetch = useDispatch()
    const count = useSelector(state => state.counter.value)


  return (
    <button 
      onClick={() => dispetch(dec())}
      disabled={count <= 0 ? true : false}
      >Decrement</button>
  )
}

export default Decrement