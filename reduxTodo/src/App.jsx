import './App.css'
import AddTodo from "./components/AddTodo.jsx";
import Todo from "./components/Todo.jsx";
import {useState} from "react";

function App() {

    const [input, setInput] = useState('Todo Dal be');

    return (
        <div>
            <h1 className="text-2xl font-bold text-blue-500 mb-4" >Todo App</h1>
            <p className="text-sm text-gray-500 mb-4">To update a todo, first enter the new text in the input field (it becomes empty after adding a todo), then click the update button of the particular todo.</p>
            <AddTodo input={input} setInput={setInput} />
            <Todo input={input} />
        </div>
    );
}

export default App