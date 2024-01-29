let initialValue = {
    players:[],
    p:'',
    repeat:[],
    isTouch:false
}

const CounterReducer = (state=initialValue,action)=>{
    if(action.type==='player'){
        return {...state,players:[...state.players,action.payload],p:action.payload,repeat:action.rep,isTouch:true}
    }
    return state
}
export default CounterReducer