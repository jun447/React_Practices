import './App.css'
import Card from "./Components/Card.jsx";

function App() {
    let obj = {
        username: `Junaid`,
        age: 20,
    }
    let arr = [1, 2, 3, 4, 5]

  return (
    <>
        <h1 className="bg-orange-700 rounded-2xl mb-2">
            Hello world!
        </h1>
        <Card myName={`Junaid`} btntxt={'Hai Bro'} data={obj} arry={arr}/>
        <Card myName={`Ghori`}
              // btntxt={"Explore"}
        />

    </>
  )
}

export default App
