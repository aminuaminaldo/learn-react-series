import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(3)
  const addValue = () => {
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
    setCounter((prevCounter) => prevCounter + 1)
  }
  const removeValue = () => {
    setCounter(counter - 1)
  }
  return (
    <>
      <h1>Welcome to React {counter}</h1>
      <h2>Test counter value... </h2>
      <button onClick={addValue}>Add</button> {" "}
      <button onClick={removeValue}>Remove</button>
      <p>Counter value: {counter}</p>
    </>
  )
}

export default App
