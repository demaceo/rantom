import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import './Catalogue.css'

function Catalogue(props){
    const movieCards = props.movies.map(movie => {
        return(
        <MovieCard 
        // onClick={event => props.handleClick(event)}
        poster={movie.poster_path} 
        title={movie.title}
        id={movie.id}
        key={movie.id}
        handleClick={props.handleClick}
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