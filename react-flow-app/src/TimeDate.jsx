function TimeDate(){
    const now= new Date();
    const currentDate = now.toLocaleDateString();
    const currentTime = now.toLocaleTimeString();

    const date = now.getDate();
    const day = now.getDay();
    const month = now.getMonth();
    const year = now.getFullYear();
    const days = ["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]
    const monName= ["jan","feb","mar","april","may","june","july","august","sept","oct","nov","dec"]
     
    return(
        <>
        <h1>CurrentDate:{currentDate}</h1>
        <h1>CurrentTime:{currentTime}</h1>
        <h3>CurrentDate&currentTime:{currentDate}{currentTime}</h3>
        <h2 style={{color:"green"}}>Today Details</h2>
        <h4>Date:{date}</h4>
        <h4>Day:{days[day]}</h4>
        <h4>Month:{monName[month]}</h4>
        <h4>Year:{year}</h4>



        </>
    )
}
export default TimeDate;