import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement,reset } from './features/counter/counterSlice'
function Counter() {
    let count = useSelector((state) => { return state.counter.count })
    let dispatch=useDispatch()
    return (
        <div className='border border-2 bg-light m-2 rounded border-primary p-2'>
            <h3>Counter:{count}</h3>
            <div>
                <button className='btn btn-danger m-2'onClick={()=>{dispatch(decrement())}}>DEC</button>
                <button className='btn btn-success m-2' onClick={()=>{dispatch(increment())}}>INC</button>
                <button className='btn btn-secondary m-2'onClick={()=>{dispatch(reset())}}>RESET</button>
            </div>
        </div>
    )
}

export default Counter