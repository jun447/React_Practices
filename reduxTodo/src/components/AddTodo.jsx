import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from "../feature/todo/todoSlice.js";

function AddTodo({ input, setInput }) {
    const dispatch = useDispatch()
    const [placeholder, setPlaceholder] = useState('Enter a Todo...')

    function addTodoHandler(e) {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
        setPlaceholder('Update a Todo OR Enter New')
    }

    return (
        <form
            onSubmit={addTodoHandler}
            className="space-x-3 mt-12 flex justify-center">
            <input
                type="text"
                className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out flex-grow"
                placeholder={placeholder}
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button
                type="submit"
                className="text-white flex-shrink bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo
// function AddTodo() {
//     const [input,setInput] =  useState('Todo Dal be')
//
//     const dispatch = useDispatch()
//     function addTodoHandler(e) {
//         e.preventDefault()
//         dispatch(addTodo(input))
//         setInput('')
//     }
//
//     return (
//         <form
//             onSubmit={addTodoHandler}
//             className="space-x-3 mt-12">
//             <input
//                 type="text"
//                 className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
//                 placeholder="Enter a Todo..."
//                 value={input}
//                 onChange={(e) => setInput(e.target.value)}
//             />
//             <button
//                 type="submit"
//                 className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
//             >
//                 Add Todo
//             </button>
//         </form>
//     )
// }
//
// export default AddTodo
