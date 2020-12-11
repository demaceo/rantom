import React from "react";
import Loader from "./Loader";
import { render, screen } from "@testing-library/react";

describe("Loader", () => {

  it("should render an image and a message", () => {
    render(<Loader />);
    const loaderImage = screen.getByRole("img");

    expect(loaderImage).toBeInTheDocument();
    expect("Please wait, the movies are loading...").toBeInTheDocument();
  });

  it("should display an error message if one is present", () => {
    render(<Loader error="waka waka"/>);
    const errorMessage = screen.getByText("waka waka");
    
    expect(errorMessage).toBeInTheDocument()
  })
});