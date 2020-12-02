import React from 'react'
import './MovieCard.css'

function MovieCard(props) {
    return (
      <section className="card">
        <img src={props.poster} alt={props.title} />
        <h3>{props.title}</h3>
      </section>
    );

}

export default MovieCard