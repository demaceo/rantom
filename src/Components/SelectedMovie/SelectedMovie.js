import React from 'react'
import './SelectedMovie.scss'
import mockMovie from '../../mockMovie.js'

function SelectedMovie(props) {
    return (
      <section className="selectedMovie">
        <h1>{props.title}</h1>
        <img src={props.poster} alt={props.title} />
        <h1>{mockMovie.movie.title}</h1>
        <h2>{mockMovie.movie.tagline}</h2>
        <img src={mockMovie.movie.backdrop_path} />
        <p>Overview: {mockMovie.movie.overview}</p>
        <p>Release Date: {mockMovie.movie.release_date}</p>
        <p>Rating: {mockMovie.movie.average_rating}</p>
        <p>Genre: {mockMovie.movie.genres[0].name}</p>
        <p>Budget: ${mockMovie.movie.budget}</p>
        <p>Revenue: ${mockMovie.movie.revenue}</p>
        <p>Duration: {mockMovie.movie.runtime} minutes</p>
      </section>
    );
}

export default SelectedMovie