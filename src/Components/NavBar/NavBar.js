import React from "react";
import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.scss";

function NavBar(props) {
  return (
    <Navbar className="nav-bar">
      <Link id="nb-title" to="/">
        RANCID TOMATILLOS
      </Link>
    </Navbar>
  );
}

export default NavBar;
