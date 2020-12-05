import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./NavBar.scss";

function NavBar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Rancid Tomatillos</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link onClick={props.returnToHome}>Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
