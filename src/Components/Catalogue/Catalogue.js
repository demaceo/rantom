import React from 'react'
import MovieCard from '../MovieCard/MovieCard'
import { Row, Col } from 'react-bootstrap'
import './Catalogue.scss'

function Catalogue(props){
    const movieCards = props.movies.map(movie => {
        return(
        <MovieCard
        className="card"
        poster={movie.poster_path} 
        title={movie.title}
        release={movie.release_date}
        rating={movie.average_rating}
        id={movie.id}
        key={movie.id}
        handleClick={props.handleClick}
        />
        )
    })
    return (
        <main className="catalogue">
            <Row>
                 {movieCards}
            </Row>
        </main>
    );
}

export default Catalogue