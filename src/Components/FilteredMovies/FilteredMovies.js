import React from "react";
import { useParams } from "react-router-dom";
import FeaturedMovies from "../FeaturedMovies/FeaturedMovies";
import NavBar from "../NavBar/NavBar";
import DropMenu from "../DropMenu/DropMenu";
import Home from "../Home/Home";
import "./FilteredMovies.scss";

function FilteredMovies({ movies }) {
  const { rating } = useParams();
  
  const filteredMovies = movies.filter((movie) => {
    return Math.round(movie.average_rating) === parseInt(rating);
  });

  return (
    <>
      <FeaturedMovies />
      <NavBar />
      <DropMenu />
      <Home movies={filteredMovies} />
      {filteredMovies.length === 0 && (
        <div className="no-rating">
          <img
            src="http://forgifs.com/gallery/d/301665-4/Girl-trips-spills-popcorn.gif"
            alt="gif of lady falling"
          />
          <h1>No movies with that rating</h1>
        </div>
      )}
    </>
  );
}

export default FilteredMovies;
