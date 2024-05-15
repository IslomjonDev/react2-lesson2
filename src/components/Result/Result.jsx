import React from 'react'
import { useSelector } from 'react-redux'


const Result = () => {

  const count = useSelector(state => state.counter.value)

  return (
    <div> Result   : {count}</div>
  )
}

export default Result