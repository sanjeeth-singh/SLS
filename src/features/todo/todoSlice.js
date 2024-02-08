import { createSlice } from "@reduxjs/toolkit";

const initialState={
    todos:[
       
    ],
    newtodo:""
}
var todoSlice =createSlice({
    name:"todoSlice",
    initialState,
    reducers:{
        newTodo:(state,action)=>{
            state.newtodo=action.payload
        },
        addTodo:(state,action)=>{
            state.todos.push(state.newtodo)
        },
        deleteTodo:(state,action)=>{
            state.todos.splice(action.payload,1)
        }
    }
})
let todoReducer=todoSlice.reducer;
export let {addTodo,deleteTodo,newTodo}=todoSlice.actions;
export default todoReducer;