import { useState } from "react";

function Count(){
    const[count,setCount] = useState(0)
    const handleclick = ()=>(
          setCount(count+1)
    )
    return(
        <>
        <h1>First Example count Incerement & Decrement:{count}</h1>
        <button style={{color:"red"}} onClick={handleclick}>IncBy+1</button>
        <button style={{color:"green"}} onClick={()=>(setCount(count-1))}>Decrement</button>

        </>
    )

}
export default Count;