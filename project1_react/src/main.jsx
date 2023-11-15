import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return (
    <>
      <p>Dahun main zuban thumary Lye</p>
    </>
  )
}
const anotherELe = (
    <a href="https://google.com" target='_blank'>jkl              </a>
    
)
const expression = 'jkls World'
const reactElement = React.createElement(
    'a',
    {href: 'https://google.com', target: '_blank'},
    'Hello World',
    expression
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/*<MyApp />*/}
    {/*    {MyApp()}*/}
    {/*  {anotherELe}*/}
    {/*  {reactElement}*/}
  </React.StrictMode>,

    // MyApp()
)
