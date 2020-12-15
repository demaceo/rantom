import React from 'react';
import { render, screen } from "@testing-library/react";
import NavBar from './NavBar';
import userEvent from '@testing-library/user-event';

const returnHome = jest.fn();
describe.skip("NavBar", () => {
    it("should render a navbar with a home button", () => {
        render(<NavBar />);
        const navBar = screen.getByText("RANCID TOMATILLOS")

        expect(navBar).toBeInTheDocument();
    });
})