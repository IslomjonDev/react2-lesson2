import { useState } from 'react'
import './App.css'
import Increment from './components/Increament/Increment'
import Decrement from './components/Decrement/Decrement'
import Result from './components/Result/Result'
import Reset from './components/Reset/Reset'
import { inc } from './context/counterSlice'

function App() {

  const [count, setCount] = useState(0)

  return (
    <>
       <h2>Counter App</h2>
       <div>
         <Increment/>
         <Decrement/>
         <Result/>
       </div>
       <Reset/>
    </>
  )
}

export default App
