 
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

//const { useState } = require("react");

import AboutUs from "./AboutUs";
import Apple from "./Apple";
import Blog from "./Blog";
import BrightText from "./BrightText";
import ContactUs from "./ContactUs";
import Count from "./Count";
import CourseGoal from "./CourseGoal";
import Cricket from "./Cricket";
import Discount from "./Discount";
import Emp from "./Emp";
 import Greet from "./Greet";
import MovieGrid from "./MovieGrid";
import TimeDate from "./TimeDate";

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
// function App(){
//   return(
//     <>
//     <h1 style={{color:"green"}}>This is Main componet..</h1>
//     <AboutUs/>
//     <ContactUs/>
//     <Greet/>
   
//     </>
//   )
// }
// export default App;

// function App(){
//   const[count,setCount]= useState(0)
 
  
//   return(
//    <>
//     <h1>The counter values is:{count}</h1>
//     <button style={{color:"red"}} onClick={()=>{setCount(count+1)}}>Inc+1</button>
//     <button style={{color:"yellow"}} onClick={()=>{setCount(count+2)}}>Inc+2</button>
//     <button style={{color:"green"}} onClick={()=>{setCount(count+3)}}>Inc+3</button>
//     <button style={{color:"blue"}} onClick={()=>{setCount(count+4)}}>Inc+4</button>
//     <button style={{color:"white"}} onClick={()=>{setCount(count+6)}}>Inc+6</button>
//     <button style={{color:"orange"}} onClick={()=>{setCount(0)}}>Reset</button>

//     </>
//   )
// }
// export default App;



function App()
{
  const empobj={id:101,name:"ravi" ,salary:2000}
 
  return(
        <>
        <h1 style={{color:"green"}}>This is Main componet..</h1>
        <AboutUs/>
         <ContactUs/>
         <Greet name="Ravi"/>
         <Greet name="Teja"/>
         <Apple/>
         <Count/>
         <Cricket/>
         <Discount/>
         <CourseGoal title="Learn React.."desc="In depth" />
         <CourseGoal title="Job.."desc="ver soon." />
         <Emp data={empobj}/>
         <Blog />
        
         <MovieGrid />
         <BrightText color="red"/>
         <BrightText color="Green"/>
         <BrightText color="blue"/>
         <TimeDate />

        
       </>
  )
}
export default App;