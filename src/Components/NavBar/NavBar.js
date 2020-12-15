import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./NavBar.scss";

function NavBar(props) {
  return (
    <Navbar className="nav-bar">
      <Navbar.Brand id="nb-title" href="/">RANCID TOMATILLOS</Navbar.Brand>
    </Navbar>
  );
}

export default NavBar;
