import '../css/Favorites.css'
import { useMovieContext } from '../contexts/MovieContext'
import MovieCard from '../components/MovieCard'


function Favorites(){

    const {favorites} = useMovieContext();
    console.log(favorites)
    if (favorites) {
        return (
        <div className="favorites">
            <h2>Your Favorites</h2>
            
            <div className="movies-grid">
                {favorites.map(movie => (
                    <MovieCard movie={movie} key={movie.id}/> // Setup key property // Filtering based on search
                ))
            }
            </div>
        </div>
        )
    }

    return <div className="favorites-empty">
        <h2>No favorite movies yet</h2>
        <p>Start adding movies to your favorites and they will appear here</p>
    </div>
}

export default Favorites