import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { getMovie } from "../../apiCalls";
import SelectedMovie from "./SelectedMovie";
jest.mock("../../apiCalls.js")

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
  beforeEach(() => {
    getMovie.mockResolvedValueOnce(mockMovieData)
  })

  it("Should render the title, tagline, movie backdrop, overview, release date, rating, genres, budget, revenue, and runtime", async () => {
    render(
      <SelectedMovie
        id={1}
      />
    );

    let movieTitle = await waitFor(() => screen.getByText("Movie Title"));
    let movieBackdrop = await waitFor(() => screen.getByRole("img"));
    let movieReleaseDate = await waitFor(() => screen.getByText("Release Date:"));
    let movieDate = await waitFor(() => screen.getByText("December"));
    let overviewTitle = await waitFor(() => screen.getByText("Overview:"));
    let movieOverview = await waitFor(() => screen.getByText("Some overview"));
    let ratingTitle = await waitFor(() => screen.getByText("Rating:"));
    let movieGenres = await waitFor(() => screen.getByText("Drama"));
    let budgetTitle = await waitFor(() => screen.getByText("Budget:"));
    let movieBudget = await waitFor(() => screen.getByText("$63000000"));
    let revenueTitle = await waitFor(() => screen.getByText("Revenue:"));
    let movieRevenue = await waitFor(() => screen.getByText("$100853753"));
    let runtimeTitle = await waitFor(() => screen.getByText("Duration:"));
    let movieRuntime = await waitFor(() => screen.getByText("139 minutes"));
    let movieTagline = await waitFor(() => screen.getByText("Movie Tagline"));

    expect(movieTitle).toBeInTheDocument();
    expect(movieBackdrop).toBeInTheDocument();
    expect(movieReleaseDate).toBeInTheDocument();
    expect(movieDate).toBeInTheDocument();
    expect(overviewTitle).toBeInTheDocument();
    expect(movieOverview).toBeInTheDocument();
    expect(ratingTitle).toBeInTheDocument();
    expect(movieGenres).toBeInTheDocument();
    expect(movieBudget).toBeInTheDocument();
    expect(budgetTitle).toBeInTheDocument();
    expect(movieRevenue).toBeInTheDocument();
    expect(revenueTitle).toBeInTheDocument();
    expect(movieRuntime).toBeInTheDocument();
    expect(runtimeTitle).toBeInTheDocument();
    expect(movieTagline).toBeInTheDocument();
  });
});
