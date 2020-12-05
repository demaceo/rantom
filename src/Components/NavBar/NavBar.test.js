import React from 'react';
import { render, screen } from "@testing-library/react";
import NavBar from './NavBar';
import userEvent from '@testing-library/user-event';

const returnHome = jest.fn();

describe("NavBar", () => {
    it("should render a navbar with a home button", () => {
        render(<NavBar />);
        const navBar = screen.getByText("Rancid Tomatillos")
        const navBarButton = screen.getByText("Home")

        expect(navBar).toBeInTheDocument();
        expect(navBarButton).toBeInTheDocument();
    });

    it("should invoke a function when clicked", () => {
        render(<NavBar
          returnToHome={returnHome}
        />);
        const navBarButton = screen.getByText("Home");

        userEvent.click(navBarButton);

        expect(returnHome).toHaveBeenCalled();
    })
})