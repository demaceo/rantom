import React from "react";
import { render, screen } from "@testing-library/react";
import Catalogue from "./Catalogue";
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

describe("Catalogue", () => {
  it("should display Movie Card component", () => {
    render(
      <MemoryRouter>
        <Catalogue movies={mockMoviesList.movies} />
      </MemoryRouter>
    );

    const cards = screen.getAllByRole("article");

    expect(cards[0]).toBeInTheDocument();
  });

  it("should display all movies", () => {
    render(
      <MemoryRouter>
        <Catalogue movies={mockMoviesList.movies} />
      </MemoryRouter>
    );

    const cards = screen.getAllByRole("article");

    expect(cards[0]).toBeInTheDocument();
    expect(cards[1]).toBeInTheDocument();
  });
});
