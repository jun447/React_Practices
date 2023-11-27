import './App.css'
import {useEffect, useState} from "react";
import {TodoProvider} from "./context/index.js";
import TodoForm from "./components/TodoForm.jsx";
import {TodoItem} from "./components/index.js";

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
    // use Effect to get all todos from local storage when page loads
    useEffect(() => {
        const todos = JSON.parse(localStorage.getItem("todos"));
        if (todos && todos.length > 0) {
            setTodos(todos);
        }
    }, []);
    // use Effect to save all todos to local storage when todos state changes
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
    <TodoProvider value={{todos, toggleTodo, updateTodo, deleteTodo, addTodo}}>
        <div className="bg-[#172842] min-h-screen py-8">
            <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                <div className="mb-4">
                    {/* Todo form goes here */}
                    <TodoForm/>
                </div>
                <div className="flex flex-wrap gap-y-3">
                    {/*Loop and Add TodoItem here */}
                    {todos.map((todo) => (
                        <div key={todo.id} className={'w-full'}>
                            <TodoItem key={todo.id} todo={todo}/>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </TodoProvider>
  )
}

export default App
