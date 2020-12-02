import React from 'react'
import MovieCard from './MovieCard'
import './Catalogue.css'

function Catalogue(props){
    const movieCards = props.movies.map(movie => {
        return(
        <MovieCard 
        poster={movie.poster_path} 
        title={movie.title}
        id={movie.id}
        key={movie.id}
        />
        )
    })
    return (
        <main className="catalogue">
        {movieCards}
        </main>
    );
}

export default Catalogue