import React from "react";
import "./SelectedMovie.scss";
import { Link } from "react-router-dom";


function SelectedMovie(props) {
  let genreList = props.genres.map((item) => <li key={Date.now}>{item}</li>);
  return (
      <section className="selectedMovie">
        <h1>{props.title}</h1>
        <h2>{props.tagline}</h2>
        <img
          width="100%"
          src={props.backdrop}
          alt={`backdrop for ${props.title}`}
        />
        <p>Overview: {props.overview}</p>
        <p>Release Date: {props.release}</p>
        <p>Rating: {props.rating}</p>
        <ul>Genres: {genreList}</ul>
        <p>Budget: ${props.budget}</p>
        <p>Revenue: ${props.revenue}</p>
        <p>Duration: {props.runtime} minutes</p>
      </section>
  );
}

export default SelectedMovie;
