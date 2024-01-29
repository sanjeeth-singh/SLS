import { connect } from "react-redux";
import React from "react";

function Counter(props){
    console.log(props);
    const handleplayers = (e)=>{
        let temp = props.players.filter((plys)=>{
            return plys===e.target.innerHTML
        })
        props.dispatch({type:'player',payload:e.target.innerHTML,rep:temp})
       
    }
    
    return(
        <div>
           { props.repeat && <h1>Team A :{props.players.length}</h1>}
             <h1>PlayerName: {props.p}{props.isTouch && <b>scored goals{props.repeat.length+1}</b>}</h1>
            <button onClick={(e)=>{handleplayers(e)}}>JasiM</button>
            <button onClick={(e)=>{handleplayers(e)}}>Naresh</button>
            <button onClick={(e)=>{handleplayers(e)}}>Murari</button>
            <button onClick={(e)=>{handleplayers(e)}}>Sanjeeth</button>
            <button onClick={(e)=>{handleplayers(e)}}>Ram</button>
            <button onClick={(e)=>{handleplayers(e)}}>Varma</button>
            <button onClick={(e)=>{handleplayers(e)}}>Lashmi kant</button>
            <button onClick={(e)=>{handleplayers(e)}}>Prany anna</button>
            <button onClick={(e)=>{handleplayers(e)}}>Vijay</button>
            <button onClick={(e)=>{handleplayers(e)}}>Naveen</button>
            <button onClick={(e)=>{handleplayers(e)}}>Karim</button>
            <p>{props.p} scored goals {props.repeat.length+1}</p>
            <p>{props.p} scored goals {props.repeat.length+1}</p>
            <p>{props.p} scored goals {props.repeat.length+1}</p>
            
        </div>
    )
}

export default connect(store=>store) (Counter)