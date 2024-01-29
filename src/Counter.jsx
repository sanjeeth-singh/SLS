import React from "react";
import { connect } from "react-redux";
function Counter(props){
    console.log(props);
    return(
        <div className="border border-success border-3 p-2">
            <h1>Counter:{props.count}</h1>
            <button onClick={()=>{props.dispatch({type:"INC"})}}>Increment</button>
            <button onClick={()=>{props.dispatch({type:"DEC"})}}>Decrement</button>
            <button onClick={()=>{props.dispatch({type:"RESET"})}}>Reset</button>
        </div>
    )
}
export default connect (function(store){return store})(Counter)