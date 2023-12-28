import './App.css'
import AddTodo from "./components/AddTodo.jsx";
import Todo from "./components/Todo.jsx";
import {useState} from "react";

function App() {

    const [input, setInput] = useState('Book Dal be');
    const [author, setAuthor] = useState('Author Dal be');


    return (
        <div>
            <h1 className="text-2xl font-bold text-blue-500 mb-4" >Add Books</h1>
            <p className="text-sm text-gray-500 mb-4">To update a book, first enter the new text in the input field (it becomes empty after adding a book, then click the update button of the particular book</p>
            <AddTodo input={input}
                     setInput={setInput}
                        author={author}
                        setAuthor={setAuthor}

            />
            <Todo
                input={input}
                author={author}
            />
        </div>
    );
}

export default App