import TodoReducer from "./reducer/todo.reducer";


import { createStore } from "redux";


let store = createStore(TodoReducer);



export default store;