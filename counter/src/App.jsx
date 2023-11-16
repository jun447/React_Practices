import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  // let count = 0
    const addValue = () => {
        // setCount(++count)
        if (count >= 20) return
        setCount(count + 1)
        console.log(`addValue ${count}`)
    }
    const decreaseValue = () => {
        console.log(`decreaseValue ${count}`)
        if(count <= 0) return
        setCount(count-1)
        // setCount(--count)
    }
  return (
    <>
        <h1>DevJun</h1>
        <h2>Counter: {count}</h2>
        <button onClick={addValue}>increase value</button>
        <button onClick={decreaseValue}>Decrease value</button>
    </>
  )
}

export default App
