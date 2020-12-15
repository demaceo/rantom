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

describe("Home", () => {
  it("should render a Catalogue component with movie cards", () => {
    render(
      <MemoryRouter>
        <Home movies={mockMoviesList.movies} />
      </MemoryRouter>
    );
    const cards = screen.getAllByRole("article");

    expect(cards[0]).toBeInTheDocument();
  });

  it("should render the correct number of movie cards", () => {
    render(
      <MemoryRouter>
        <Home movies={mockMoviesList.movies} />
      </MemoryRouter>
    );

    const cards = screen.queryAllByRole("article");

    expect(cards.length).toEqual(mockMoviesList.movies.length);
  });
});
