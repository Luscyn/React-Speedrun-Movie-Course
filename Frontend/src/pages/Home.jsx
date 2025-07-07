import MovieCard from "../components/MovieCard"
import { useState } from "react";

function Home() {

    const movies = [
        { id: 1, title: "Jonh Wick", release_date: "2020" },
        { id: 2, title: "Inception", release_date: "2010" },
        { id: 3, title: "The Matrix", release_date: "1999" },
        { id: 4, title: "Interstellar", release_date: "2014" },
        { id: 5, title: "The Dark Knight", release_date: "2008" },
    ];

    const handleSearch = (userText) => {

    }


    return ( 
    <div className="home">

        <form onSubmit={handleSearch} className="search-form">
            <input type="text" placeholder="Search for movies..." className="search-input"/>
            <button type="submit" className="search">Search</button>
        </form>

        <div className="movies-grid">
            {movies.map(movie => (
                <MovieCard movie={movie} key={movie.id}/> // Setup key property
            ))}
        </div>
    </div> 
    );
}

export default Home