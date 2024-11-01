import { useState } from "react"

function Discount(){
    const originalPrice = 3000
    const[price,setprice] = useState(originalPrice)
    const[discount,setdiscount] =useState(0)
    const discountval =(discountval)=>{
        if(discountval===10)
        {
            setdiscount(10)
            setprice(originalPrice*0.10)
        }
        else if(discountval===20)
        {
            setdiscount(20)
            setprice(originalPrice*0.2)
        }
        else if(discountval===30)
            {
                setdiscount(30)
                setprice(originalPrice*0.30)
            }
            else{
                setdiscount(0)
               setprice(0)
            } 
    }

    return(
        <>
        <h1>originalPrice is:{originalPrice}</h1>
        <h2>Discount Amount is:{price}</h2>
        <h2>Applied Discoint% is:{discount}</h2>
        <button style={{color:"pink"}} onClick={ ()=>(discountval(10))}>Apply 10%</button>
        <button style={{color:"blue"}} onClick={()=>(discountval(20))}>Apply 20%</button>
        <button style={{color:"green"}} onClick={()=>(discountval(30))}>Apply 30%</button>
        <button style={{color:"red"}} onClick={()=>(discountval(0))}>Reset</button>
        </>
    )
}
export default Discount;