import './App.css'
import {useState} from "react";
import {TodoProvider} from "./context/index.js";

function App() {
  //   state for todos
    const [todos, setTodos] = useState([]);

    //add todo
    const addTodo = (todo) => {
        // setTodos([...todos, todo])
        setTodos((prevTodos) => [...prevTodos, {
            id:Date.now(),
            ...todo,
        }])
    }
    //Update todo
    const updateTodo = (id, todo) => {
         setTodos((prevState)=>(
             prevState.map((prevTodo)=>(
                 prevTodo.id===id ? todo :prevTodo
             ))
         ))
    }
    // Delete todo
    const deleteTodo = (id) => {
        setTodos((prevState)=>(
            prevState.filter((prevTodo)=>(
                prevTodo.id!==id
            ))
        ))
    }
    //Toggle Todo
    const toggleTodo = (id) => {
        setTodos((prevState)=>(
            prevState.map((prevTodo)=>(
                prevTodo.id=== id ? {
                    ...prevTodo,
                    completed:!prevTodo.completed
                } : prevTodo
            ))
        ))
    }

    return (
    <TodoProvider value={{todos, toggleTodo, updateTodo, deleteTodo, addTodo}}>
        <div className="bg-[#172842] min-h-screen py-8">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                <div className="mb-4">
                    {/* Todo form goes here */}
                </div>
                <div className="flex flex-wrap gap-y-3">
                    {/*Loop and Add TodoItem here */}
                </div>
            </div>
        </div>
    </TodoProvider>
  )
}

export default App
