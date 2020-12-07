import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./NavBar.scss";
import { Link } from 'react-router-dom'

function NavBar(props) {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">Rancid Tomatillos</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
