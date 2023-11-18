import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('white')

const changeClr = (e) => {
    // console.log(e.currentTarget.style.backgroundColor)
    setColor(e.currentTarget.style.backgroundColor)
}

  return (
      <>

          <div className="w-full h-screen duration-200"
               style={{backgroundColor: color}}
          >

              <div
                  className="fixed flex flex-wrap justify-center inset-x-24 px-2 top-2 space-x-4 p-4 bg-primary width rounded-xl">

                  <button className="w-16 h-16 bg-red-500"
                          style={{backgroundColor: "red"}}
                          onClick={changeClr}
                  >
                  </button>
                  <button className="w-16 h-16 bg-red-500"
                          style={{backgroundColor: "green"}}
                          onClick={changeClr}
                  >
                  </button>
                  <button className="w-16 h-16 bg-red-500"
                          style={{backgroundColor: "yellow"}}
                          onClick={changeClr}
                  >
                  </button>
                  <button className="w-16 h-16 bg-red-500"
                          style={{backgroundColor: "blue"}}
                          onClick={changeClr}
                  >
                  </button>
                  <button className="w-16 h-16 bg-red-500"
                          style={{backgroundColor: "purple"}}
                          onClick={changeClr}
                  >
                  </button>
                  <button className="w-16 h-16 bg-red-500"
                          style={{backgroundColor: "aqua"}}
                          onClick={changeClr}
                  >
                  </button>
                  <button className="w-16 h-16 bg-red-500"
                          style={{backgroundColor: "orangered"}}
                          onClick={changeClr}
                  >
                  </button>


              </div>
          </div>

      </>
  )
}

export default App
