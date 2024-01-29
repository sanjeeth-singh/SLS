import React from "react";
import { connect } from "react-redux";
function Todolist(props) {
    console.log(props);
    return (
        <div>
            <input type="text" onChange={(e) => { props.dispatch({ type: "UPDATE", payload: e.target.value }) }} />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button onClick={() => { props.dispatch({ type: "ADDTODO" }) }}>Add Task</button>
            <ul>
                {
                    props.todos.map((todo,i) => {
                        return (
                           <div >
                             <li className="p-2">
                                {todo}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                <button onClick={()=>{props.dispatch({type:'DEL',ind:i})}}>Delete</button>
                            </li>
                           </div>
                        )
                    })
                }
            </ul>
        </div>
    )
}
export default connect(store => store)(Todolist)