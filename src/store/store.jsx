import TodoReducer from "./reduser/todo.reduser";

import { createStore } from "redux";

let store=createStore(TodoReducer)

export default store