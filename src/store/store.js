import { createStore } from "redux";
import CounterReducer from "./reducer/counterreducer";

var store= new createStore(CounterReducer);

export default store;