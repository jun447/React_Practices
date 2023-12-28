import {createSlice, nanoid} from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            text: 'The great Gatsby',
            author: 'F. Scott Fitzgerald',
            category: 'Novel',
        },
        {
            id: 2,
            text: 'Anna Karenina',
            author: 'Leo Tolstoy',
            category: 'Novel',
        },
        {
            id: 3,
            text: 'The selfish gene',
            author: 'Richard Dawkins',
            category: 'Science',
        },
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const {author, text} = action.payload;
            const newTodo = {
                id: nanoid(),
                text: text,
                author: author,
                category: 'Novel',
            }
            state.todos.push(newTodo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter(todo => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const {id, text,author} = action.payload;
            const index = state.todos.findIndex(todo => todo.id === id);
            console.log(id)
            console.log('index ', index)
            state.todos[index].text = text;
            state.todos[index].author = author;


        }
        // updateTodo:(state, action)=>{
        //     const index = state.todos.findIndex(todo => todo.id === action.payload)
        //     console.log(index)
        //     state.todos[index].text = action.payload.text
        // }
    }
})
// export the actions
export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

// export the reducer
export default todoSlice.reducer