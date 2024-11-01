import { useState } from "react";

function Apple()
{
  const[apples,setApple] = useState(0)
  return(
    <>
    <h1><bold>Number of Apples:{apples}</bold></h1>
    {apples === 0 ?
    (<p>No Apples Lef!</p>):
    (<p>You have some apples...</p>)
  }
  <button style={{color:"green"}} onClick={()=>(setApple(apples+1))}>Add 1 Apple</button>
  <button style={{color:"red"}} onClick={()=>(   apples>0 &&setApple(apples-1))}>Remove 1 Apple</button>
  <button style={{color:"blue"}} onClick={()=>(setApple(0))}>Reset All Apples</button>
    </>
  )
}
export default Apple;