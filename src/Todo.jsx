import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newTodo } from './features/todo/todoSlice';
import { addTodo } from './features/todo/todoSlice';
import { deleteTodo } from './features/todo/todoSlice';
import './App.css';

function Todo() {
    let todos = useSelector(state => state.todo.todos)
    let dispatch = useDispatch();
    return (
        <div className='border border-2 bg-light m-2 rounded border-primary p-2'>
            <h3>TodoList</h3>
            <div className='d-flex form'>
            <input type="text" onChange={(e) => { dispatch(newTodo(e.target.value)) }} className='rounded form-control' />
            &nbsp;&nbsp;&nbsp;
            <button onClick={() => { dispatch(addTodo()) }} className='rounded btn btn-secondary'>AddTodo</button>
            </div>
            <ul >
                {
                    todos?.map((todo) => {
                        return <li className='m-2 border border-warning border-3 rounded  d-flex'>
                            <span className='m-2'>{todo}</span>
                            <button className='btn btn-primary m-2 p-2 ms-auto'  onClick={()=>{dispatch(deleteTodo())}}>Delete</button>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Todo