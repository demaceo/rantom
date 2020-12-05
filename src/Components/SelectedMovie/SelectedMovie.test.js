import React from "react";
import { render, screen } from "@testing-library/react";
import SelectedMovie from "./SelectedMovie";

const mockMovieData = {
  movie: {
    id: 1,
    title: "Movie Title",
    poster_path: "someURL",
    backdrop_path: "someURL",
    release_date: "December",
    overview: "Some overview",
    average_rating: 6,
    genres: ["Drama"],
    budget: 63000000,
    revenue: 100853753,
    runtime: 139,
    tagline: "Movie Tagline",
  },
};

describe("Selected Movie", () => {
  it("Should render the title, tagline, movie backdrop, overview, release date, rating, genres, budget, revenue, and runtime", () => {
    render(
      <SelectedMovie
        title={mockMovieData.movie.title}
        tagline={mockMovieData.movie.tagline}
        poster={mockMovieData.movie.poster_path}
        backdrop={mockMovieData.movie.backdrop_path}
        overview={mockMovieData.movie.overview}
        release={mockMovieData.movie.release_date}
        rating={mockMovieData.movie.average_rating}
        genres={mockMovieData.movie.genres}
        budget={mockMovieData.movie.budget}
        revenue={mockMovieData.movie.revenue}
        runtime={mockMovieData.movie.runtime}
      />
    );

    let movieTitle = screen.getByText("Movie Title");
    let movieBackdrop = screen.getByRole("img");
    let movieReleaseDate = screen.getByText("Release Date: December");
    let movieOverview = screen.getByText("Overview: Some overview");
    let movieAverageRating = screen.getByText("Rating: 6");
    let movieGenres = screen.getByText("Drama");
    let movieBudget = screen.getByText("Budget: $63000000");
    let movieRevenue = screen.getByText("Revenue: $100853753");
    let movieRuntime = screen.getByText("Duration: 139 minutes");
    let movieTagline = screen.getByText("Movie Tagline");

    expect(movieTitle).toBeInTheDocument();
    expect(movieBackdrop).toBeInTheDocument();
    expect(movieReleaseDate).toBeInTheDocument();
    expect(movieOverview).toBeInTheDocument();
    expect(movieAverageRating).toBeInTheDocument();
    expect(movieGenres).toBeInTheDocument();
    expect(movieBudget).toBeInTheDocument();
    expect(movieRevenue).toBeInTheDocument();
    expect(movieRuntime).toBeInTheDocument();
    expect(movieTagline).toBeInTheDocument();
  });
});
