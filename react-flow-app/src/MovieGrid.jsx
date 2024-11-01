import MovieCard from "./MovieCard";

function MovieGrid(){
    const movies= [
        {id:101,movieName:"BRO",Actor:"PawanKalyan", rating:5},
        {id:102,movieName:"Venum",Actor:"holly", rating:3},
        {id:103,movieName:"Premalu",Actor:"p", rating:4},
        {id:104,movieName:"GabbarSingh" ,Actor:"PawanKalyan",rating:5},
        {id:105,movieName:"OG", Actor:"PawanKalyan",rating:5}
    ]
    return(

        <>
        {movies.map((movie)=>(
            (<MovieCard key={movie.id} list={movie}/>)
        ))}
        </>
        
    )





        {/* <MovieCard list={movies[0]} />
        <MovieCard list={movies[1]} />
        <MovieCard list={movies[2]} />
        <MovieCard list={movies[3]} />
        <MovieCard list={movies[4]} /> */}
        
       

    
        }    

export default MovieGrid;