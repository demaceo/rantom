import React from "react";
import FeaturedMovies from "./FeaturedMovies";
import { render, screen } from "@testing-library/react";
import { Carousel } from "react-bootstrap";

describe("Featured Movies", () => {
    it("should render a carousel", () => {
        render(<FeaturedMovies />);
        const featuredOne = screen.getByText("Spider-Man")
        const featuredTwo = screen.getByText("Dark-Knight");
        const featuredThree = screen.getByText("Your-Name");
        const featuredFour = screen.getByText("klaus");
        const featuredFive = screen.getByText("Ex-machina");
        const featuredSix = screen.getByText("haunting-of-hillhouse");
        const featuredSeven = screen.getByText("swiss-army-man");

        expect(featuredOne).toBeInTheDocument();
        expect(featuredTwo).toBeInTheDocument();
        expect(featuredThree).toBeInTheDocument();
        expect(featuredFour).toBeInTheDocument();
        expect(featuredFive).toBeInTheDocument();
        expect(featuredSix).toBeInTheDocument();
        expect(featuredSeven).toBeInTheDocument();
    })
})
