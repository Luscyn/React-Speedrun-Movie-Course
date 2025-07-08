import '../css/MovieCard.css'

function MovieCard({movie}){

    function onFavoriteClick(){
        alert("Clicked")
    }

    return <div className="movie-card">
        <div className="move-poster">
            <img src={movie.url} alt={movie.title} />
            <div className="movie-overload">
                <button className="favorite-btn" onClick={onFavoriteClick}>❤︎</button>
            </div>
        </div>
        <div className="movie-info">
            <h3>{movie.title}</h3>
            <p>{movie.realease_date}</p>
        </div>
    </div>

}

export default MovieCard;