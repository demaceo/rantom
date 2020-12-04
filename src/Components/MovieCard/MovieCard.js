import React from 'react'
import './MovieCard.css'

function MovieCard(props) {
    return (
      <section className="card" onClick={props.handleClick}>
        <img src={props.poster} alt={props.title} id={props.id} onClick={props.handleClick} />
        <h3>{props.title}</h3>
      </section>
    );

}


export default MovieCard;