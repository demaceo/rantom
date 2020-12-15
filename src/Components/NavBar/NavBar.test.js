import React from "react";
import { render, screen } from "@testing-library/react";
import NavBar from "./NavBar";
import { MemoryRouter } from "react-router-dom";

describe("NavBar", () => {
  it("should render a navbar with a home button", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const navBar = screen.getByText("RANCID TOMATILLOS");

    expect(navBar).toBeInTheDocument();
  });
});
