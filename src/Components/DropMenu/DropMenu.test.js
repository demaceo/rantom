import React from "react";
import { screen, render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DropMenu from "./DropMenu";

describe("DropMenu", () => {
  it("Should display a button with options when clicked", () => {
    render(<DropMenu />)

    let button = screen.getByText("Filter by Ratings");

    userEvent.click(button)

    let allOption = screen.getByText("All");
    let firstOption = screen.getByText("1 Star");
    let secondOption = screen.getByText("2 Star");
    let thirdOption = screen.getByText("3 Star");
    let fourthOption = screen.getByText("4 Star");
    let fifthOption = screen.getByText("5 Star");
    let sixthOption = screen.getByText("6 Star");
    let seventhOption = screen.getByText("7 Star");

    expect(button).toBeInTheDocument();
    expect(allOption).toBeInTheDocument();
    expect(firstOption).toBeInTheDocument();
    expect(secondOption).toBeInTheDocument();
    expect(thirdOption).toBeInTheDocument();
    expect(fourthOption).toBeInTheDocument();
    expect(fifthOption).toBeInTheDocument();
    expect(sixthOption).toBeInTheDocument();
    expect(seventhOption).toBeInTheDocument();
  })
})