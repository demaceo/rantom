import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import Catalogue from "./Catalogue";
import MovieCard from '../MovieCard/MovieCard';
import { getMovies } from "../../apiCalls";
jest.mock("../../apiCalls.js");

const mockMoviesList = {
  movies: [
    {
      id: 1,
      title: "Movie Title",
      poster_path: "someURL",
      backdrop_path: "someURL",
      release_date: "2019-12-04",
      overview: "Some overview",
      average_rating: 6,
    },
    {
      id: 2,
      title: "Second Movie Title",
      poster_path: "someURL",
      backdrop_path: "someURL",
      release_date: "2019-12-04",
      overview: "Some overview",
      average_rating: 4,
    },
  ],
};

describe.skip("Catalogue", () => {

    it("should display Movie Card component", () => {
        render(<Catalogue movies={ getMovies } />);

        expect().toBeInTheDocument();
    })
    it.skip("should display all movies", () => {
        render(<Catalogue />);
    })
})


