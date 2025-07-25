import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../MovieCard/MovieCard";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Catalogue.scss";

function Catalogue(props) {
  const movieCards = props.movies.map((movie) => {
    return (
      <Link key={movie.id} role="article" to={`/movie/${movie.id}`} className="movie-link">
        <MovieCard
          poster={movie.poster_path}
          title={movie.title}
          release={movie.release_date}
          rating={movie.average_rating}
          id={movie.id}
        />
      </Link>
    );
  });
  
  return (
    <Row className="justify-content-md-center catalogue-grid">
      {movieCards}
    </Row>
  );
}

Catalogue.propTypes = {
  movies: PropTypes.array.isRequired
};

export default Catalogue;
