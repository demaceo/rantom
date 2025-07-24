import React from "react";
import PropTypes from "prop-types";
import Catalogue from "../Catalogue/Catalogue.js";
import "./Home.scss";

function Home(props) {
  return <Catalogue movies={props.movies} />;
}

Home.propTypes = {
  movies: PropTypes.array.isRequired
};

export default Home;
