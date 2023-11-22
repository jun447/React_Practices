import { useState } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)

  return (
    <>
        <h1 className={'text-4xl text-blue-400'} >React + Vite</h1>
    </>
  )
}

export default App
