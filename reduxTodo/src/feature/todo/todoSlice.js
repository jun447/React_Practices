import {createSlice,nanoid} from "@reduxjs/toolkit";

 const initialState = {
    todos: [{
        id: 1,
        text: 'Learn React',
    }]
 }

 export const todoSlice = createSlice({
     name: 'todo',
     initialState,
     reducers:{
         addTodo:(state, action)=>{
                const newTodo = {
                    id: nanoid(),
                    text: action.payload,
                }
                state.todos.push(newTodo)
         },
         removeTodo:(state, action)=>{
             state.todos = state.todos.filter(todo => todo.id !== action.payload)
         },
         updateTodo: (state, action) => {
             const {id, text} = action.payload;
             const index = state.todos.findIndex(todo => todo.id === id);
             console.log(id)
             console.log('index ',index)
             state.todos[index].text = text;



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