import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import "./DropMenu.scss";

export default function DropMenu() {
  return (
    <DropdownButton id="dropdown-basic-button" title="Filter by Ratings">
      <Dropdown.Item href="/">All</Dropdown.Item>
      <Dropdown.Item href="/movies/ratings/1">1 Star</Dropdown.Item>
      <Dropdown.Item href="/movies/ratings/2">2 Star</Dropdown.Item>
      <Dropdown.Item href="/movies/ratings/3">3 Star</Dropdown.Item>
      <Dropdown.Item href="/movies/ratings/4">4 Star</Dropdown.Item>
      <Dropdown.Item href="/movies/ratings/5">5 Star</Dropdown.Item>
      <Dropdown.Item href="/movies/ratings/6">6 Star</Dropdown.Item>
      <Dropdown.Item href="/movies/ratings/7">7 Star</Dropdown.Item>
    </DropdownButton>
  );
}
