import React from "react";
import { render, screen } from "@testing-library/react";
import MovieCard from "./MovieCard";
import userEvent from "@testing-library/user-event";

const handleClick = jest.fn();
const mockMovieCard = {
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

describe("MovieCard", () => {
  it("should display a poster, title, release Date, and rating", () => {
    render(
      <MovieCard
        poster={mockMovieCard.movies[0].poster_path}
        title={mockMovieCard.movies[0].title}
        release={mockMovieCard.movies[0].release_date}
        rating={mockMovieCard.movies[0].average_rating}
      />
    );
    const movieCardTitle = screen.getByText("Movie Title");
    const movieCardPoster = screen.getByRole("img");
    const movieCardReleaseDate = screen.getByText("Released: 2019-12-04");
    const movieCardRating = screen.getByText("Average Rating: 6");

    expect(movieCardPoster).toBeInTheDocument();
    expect(movieCardTitle).toBeInTheDocument();
    expect(movieCardReleaseDate).toBeInTheDocument();
    expect(movieCardRating).toBeInTheDocument();
  });

  it("should invoke a function when a movie card is clicked", () => {
    render(<MovieCard handleClick={handleClick} />);
    const movieCardPoster = screen.getByRole("img");

    userEvent.click(movieCardPoster);

    expect(handleClick).toHaveBeenCalled();
  });
});
