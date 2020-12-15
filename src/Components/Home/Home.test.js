import React from "react";
import Home from "./Home";
import { render, screen } from "@testing-library/react";
import { getMovies } from "../../apiCalls";

describe.skip("Home", () => {
    it("should render a Catalogue component", () => {
        render(<Home />);
    })
    it("should render the correct number of movie cards", () => {
        render(<Home />);
    })
})
