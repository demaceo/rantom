import React from "react";
import "./SelectedMovie.scss";

function SelectedMovie(props) {
  let genreList = props.genres.map((item) => <li key={Date.now}>{item}</li>);


let tomatilloRating = []; 
  while(tomatilloRating.length !== Math.round(props.rating)){
      tomatilloRating.push(" ⭐️ ");
};

  return (
    <>
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
            <p>
              <u>Overview: </u> {props.overview}
            </p>
            <p>
              <u>Release Date: </u> {props.release}
            </p>
            <p>
              <u>Rating: </u> {tomatilloRating}
            </p>
            <ul>
              <u>Genres: </u> {genreList}
            </ul>
            <p>
              <u>Budget: </u> {props.budget ? "$" + props.budget : "N/A"}
            </p>
            <p>
              <u>Revenue: </u> {props.revenue ? "$" + props.revenue : "N/A"}
            </p>

            <p>
              <u>Duration:</u> {props.runtime} minutes
            </p>
          </section>
        </section>
      </section>
    </>
  );
}

export default SelectedMovie;
