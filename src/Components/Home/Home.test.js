import React from "react";
import Home from "./Home";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

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
const mockMovieData = {
  movie: {
    id: 1,
    title: "Movie Title",
    poster_path: "someURL",
    backdrop_path: "someURL",
    release_date: "2019-12-04",
    overview: "Some overview",
    average_rating: 6,
    genres: [ "Drama" ],
    budget: 63000000,
    revenue: 100853753,
    runtime: 139,
    tagline: "Movie Tagline",
  },
};

describe("Home", () => {
    it("should render a Catalogue component with movie cards", () => {
        render(
            <MemoryRouter>
                <Home movies={mockMoviesList.movies}/>
            </MemoryRouter>
            );
        const cards = screen.getAllByRole("article")

        expect(cards[0]).toBeInTheDocument();
    })

    it("should render the correct number of movie cards", () => {
        render(
            <MemoryRouter>
                <Home movies={mockMoviesList.movies}/>
            </MemoryRouter>
            );

        const cards = screen.queryAllByRole("article")


        expect(cards.length).toEqual(mockMoviesList.movies.length)
    })
})
