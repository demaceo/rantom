import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./DropMenu.scss";

export default function DropMenu() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Filter by Ratings">
      <Dropdown.Item as={Link} to="/">All</Dropdown.Item>
      <Dropdown.Item as={Link} to="/movies/ratings/1">1 Star</Dropdown.Item>
      <Dropdown.Item as={Link} to="/movies/ratings/2">2 Star</Dropdown.Item>
      <Dropdown.Item as={Link} to="/movies/ratings/3">3 Star</Dropdown.Item>
      <Dropdown.Item as={Link} to="/movies/ratings/4">4 Star</Dropdown.Item>
      <Dropdown.Item as={Link} to="/movies/ratings/5">5 Star</Dropdown.Item>
      <Dropdown.Item as={Link} to="/movies/ratings/6">6 Star</Dropdown.Item>
      <Dropdown.Item as={Link} to="/movies/ratings/7">7 Star</Dropdown.Item>
      <Dropdown.Item as={Link} to="/movies/ratings/8">8 Star</Dropdown.Item>
      <Dropdown.Item as={Link} to="/movies/ratings/9">9 Star</Dropdown.Item>
      <Dropdown.Item as={Link} to="/movies/ratings/10">10 Star</Dropdown.Item>
    </DropdownButton>
  );
}
