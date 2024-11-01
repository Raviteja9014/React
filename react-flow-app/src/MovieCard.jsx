function MovieCard({list})
{
    return(
        <>
        <h1>List OF Movies</h1>
        <p>Movie Id:{list.id}</p>
        <p>Movie Name:{list.name}</p>
        <p>Actor Nmae:{list.Actor}</p>
        <p>Movie Rating :{list.rating}</p>



        </>
    )
}
export default MovieCard;