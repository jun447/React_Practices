import React, {useState} from 'react'
import {TodoContext, useTodoContext} from "../context/index.js";

function TodoForm() {
    // state for individual todoitem
    const [todo, setTodo] = useState(""
        // {
        // id: Date.now(),
        // msg: "",
        // completed: false,
        // }
    );
    // getting addTodo function from context
    const {addTodo} = useTodoContext(TodoContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!todo) return;
        addTodo({
            todo: todo,
            completed: false,
        });
        setTodo('')
    };

    return (
        <form onSubmit={handleSubmit} className="flex">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                value={todo} //wiring up the input to the state
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-orange-700 text-white shrink-0">
                Add
            </button>
        </form>
    );
}

export default TodoForm
