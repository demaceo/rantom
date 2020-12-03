import React from 'react'
import './SelectedMovie.css'

function SelectedMovie(props) {
    return (
    <section className="selectedMovie">
        <h1> {props.title}</h1>
        <img src={props.poster} alt={props.title} />
    </section>
    )
}

export default SelectedMovie