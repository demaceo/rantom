import React from "react";
import FeaturedMovies from "./FeaturedMovies";
import { render, screen } from "@testing-library/react";

describe("Featured Movies", () => {
  it("should render each featured movie", () => {
    render(<FeaturedMovies />);
    const featuredOne = screen.getByAltText("Spider-Man");
    const featuredTwo = screen.getByAltText("Dark-Knight");
    const featuredThree = screen.getByAltText("Your-Name");
    const featuredFour = screen.getByAltText("klaus");
    const featuredFive = screen.getByAltText("Ex-machina");
    const featuredSix = screen.getByAltText("haunting-of-hillhouse");
    const featuredSeven = screen.getByAltText("swiss-army-man");

    expect(featuredOne).toBeInTheDocument();
    expect(featuredTwo).toBeInTheDocument();
    expect(featuredThree).toBeInTheDocument();
    expect(featuredFour).toBeInTheDocument();
    expect(featuredFive).toBeInTheDocument();
    expect(featuredSix).toBeInTheDocument();
    expect(featuredSeven).toBeInTheDocument();
  });
});
