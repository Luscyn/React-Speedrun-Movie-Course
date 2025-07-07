import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home() {

    const [searchQuery, setSearchQuery] = useState(""); // Name of state, function to update the state

    const movies = [
        { id: 1, title: "Jonh Wick", release_date: "2020" },
        { id: 2, title: "Inception", release_date: "2010" },
        { id: 3, title: "The Matrix", release_date: "1999" },
        { id: 4, title: "Interstellar", release_date: "2014" },
        { id: 5, title: "The Dark Knight", release_date: "2008" },
    ];

    const handleSearch = (e) => {
        e.preventDefault(); // prevent default behaviour of resetting
        // alert(searchQuery) // show the varaible of search query
        setSearchQuery("")
    }


    return ( 
    <div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} 
            onChange={(e) => setSearchQuery(e.target.value)}/>
            <button type="submit" className="search">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(movie => (
                
                movie.title.toLowerCase().startsWith(searchQuery) &&
                <MovieCard movie={movie} key={movie.id}/> // Setup key property // Filtering based on search
            ))}
        </div>
    </div> 
    );
}

export default Home