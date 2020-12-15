import React, { Component } from "react";
import { Row, Alert, Col } from "react-bootstrap";
import NavBar from "./Components/NavBar/NavBar";
import FeaturedMovies from "./Components/FeaturedMovies/FeaturedMovies";
import SelectedMovie from "./Components/SelectedMovie/SelectedMovie";
import { getMovies, getMovie } from "./apiCalls";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Route } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import Home from "./Components/Home/Home";
import DropMenu from "./Components/DropMenu/DropMenu";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: "",
      loader: true,
      selectedMovie: {},
    };
  }

  render() {
    if (this.state.loader) {
      <Loader error={this.state.error} />;
    }
    return (
      <>
        <Route
          exact
          path="/movies/ratings/:rating"
          render={({ match }) => {
            return (
              <>
                <FeaturedMovies />
                <NavBar returnToHome={this.returnToHome} />
                <DropMenu movies={this.state.movies} />
                <Home
                  movies={this.filteredMovies(parseInt(match.params.rating))}
                />
              </>
            );
          }}
        />
        <Route
          exact
          path="/movie/:id"
          render={({ match }) => {
            return (
              <>
                <NavBar returnToHome={this.returnToHome} />
                <SelectedMovie id={parseInt(match.params.id)} />
              </>
            );
          }}
        />
        <Route exact path="/">
          <FeaturedMovies />
          <NavBar onClick={this.clearSelected} />
          <DropMenu movies={this.state.movies} />
          <Home movies={this.state.movies} />
        </Route>
      </>
    );
  }

  componentDidMount() {
    getMovies()
      .then((response) => this.setState({ movies: response.movies }))
      .then(this.setState({ loader: false }))
      .catch((err) => this.setState({ error: err }));
  }

  clearSelected() {
    this.setState({ selectedMovie: {} });
  }

  filteredMovies(rating) {
    return this.state.movies.filter((movie) => {
      return Math.round(movie.average_rating) === rating;
    });
  }
}

export default App;
