import React from "react";
import "./SelectedMovie.scss";

function SelectedMovie(props) {
  let genreList = props.genres.map((item) => <li key={Date.now}>{item}</li>);
  return (
    <React.Fragment>
      <section className="selectedMovie">
        <img
          width="100%"
          src={props.backdrop}
          alt={`backdrop for ${props.title}`}
        />
        <section className="movie-info">
          <section>
          <h1>{props.title}</h1>
          <h2>{props.tagline}</h2>
          </section>
          <section>
          <p><u>Overview</u>: {props.overview}</p>
          <p><u>Release Date:</u> {props.release}</p>
          <p><u>Rating:</u> {props.rating}</p>
          <ul><u>Genres:</u> {genreList}</ul>
          <p><u>Budget:</u> ${props.budget}</p>
          <p><u>Revenue:</u> ${props.revenue}</p>
          <p><u>Duration:</u> {props.runtime} minutes</p>
          </section>
        </section>
      </section>
    </React.Fragment>
  );
}

export default SelectedMovie;
