import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";
import { getMovies, getMovie } from "./apiCalls";
import { MemoryRouter } from "react-router-dom";
jest.mock("./apiCalls.js");

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
    genres: ["Drama"],
    budget: 63000000,
    revenue: 100853753,
    runtime: 139,
    tagline: "Movie Tagline",
  },
};

describe("App", () => {
  beforeEach(() => {
    getMovies.mockResolvedValueOnce(mockMoviesList);
    getMovie.mockResolvedValueOnce(mockMovieData);
  });

  it("renders a carousel, and movie cards", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    const carousel = await waitFor(() => screen.getByTitle("Featured Movies"));
    const movieCard1 = await waitFor(() => screen.getByText("Movie Title"));
    const movieCard2 = await waitFor(() =>
      screen.getByText("Second Movie Title")
    );

    expect(carousel).toBeInTheDocument();
    expect(movieCard1).toBeInTheDocument();
    expect(movieCard2).toBeInTheDocument();
  });

  it("renders the loader while movies load", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const movieCards = await waitFor(() => screen.getAllByRole("article"));

    expect(movieCards[0]).toBeInTheDocument();

    userEvent.click(movieCards[0]);

    expect(
      screen.getByText("Please wait, the movies are loading...")
    ).toBeInTheDocument();
  });

  it("renders a movie's details when the movie is clicked", async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const movieCards = await waitFor(() => screen.getAllByRole("article"));

    userEvent.click(movieCards[0]);

    expect(await waitFor(() => screen.getByText("Movie Tagline"))).toBeInTheDocument();
  });
});
