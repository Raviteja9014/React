import { useState } from "react";

function Cricket(){
    const[count,SetScore]=useState(0)
    return(
        <>
        <h1>Live Cricket Score:{count}</h1>
        <button style={{color:"blue"}} onClick={()=>(SetScore(count+1))}>Inc+1</button>
        <button style={{color:"gray"}} onClick={()=>(SetScore(count+2))}>Inc+2</button>
        <button style={{color:"green"}} onClick={()=>(SetScore(count+3))}>Inc+3</button>
        <button style={{color:"yellowgreen"}} onClick={()=>(SetScore(count+4))}>Inc+4</button>
        <button style={{color:"violet"}} onClick={()=>(SetScore(count+6))}>Inc+6</button>
        <button style={{color:"red"}} onClick={()=>(SetScore(0))}>Reset</button>
        </>
    )
}
export default Cricket;