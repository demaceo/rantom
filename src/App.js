import React, { Component } from "react";
import { Container, Row, Alert, Col } from "react-bootstrap";
import NavBar from "./Components/NavBar/NavBar";
import FeaturedMovies from "./Components/FeaturedMovies/FeaturedMovies";
import SelectedMovie from "./Components/SelectedMovie/SelectedMovie";
import Catalogue from "./Components/Catalogue/Catalogue";
import { getMovies, getMovie } from "./apiCalls";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Switch, Route, Link } from "react-router-dom";
import Loader from "./Components/Loader/Loader";
import Home from './Components/Home/Home';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      error: "",
      loader: true,
    };
  }

  render() {
    if (this.state.loader) {
      return (
      <Loader error={this.state.error} /> 
      )
    }
    return (
      <Switch>
        <Route path="/selected-movie">
          <NavBar returnToHome={this.returnToHome} />
          <SelectedMovie
          // title={this.state.selectedMovie.title}
          // tagline={this.state.selectedMovie.tagline}
          // poster={this.state.selectedMovie.poster_path}
          // backdrop={this.state.selectedMovie.backdrop_path}
          // overview={this.state.selectedMovie.overview}
          // release={this.state.selectedMovie.release_date}
          // rating={this.state.selectedMovie.average_rating}
          // genres={this.state.selectedMovie.genres}
          // budget={this.state.selectedMovie.budget}
          // revenue={this.state.selectedMovie.revenue}
          // runtime={this.state.selectedMovie.runtime}
          />
        </Route>
        <Route path="/">
          <FeaturedMovies />
          <NavBar returnToHome={this.returnToHome} />
          <Home movies={this.state.movies} handleClick={this.handleClick} />
        </Route>
      </Switch>
    );
  }

  componentDidMount() {
    getMovies()
      .then((response) => this.setState({ movies: response.movies }))
      .then(this.setState({ loader: false }))
      .catch((err) => this.setState({ error: err }));
  }

  returnToHome = (event) => {
    this.setState({
      selectedMovie: 0,
    });
  };

  handleClick = (event) => {
    getMovie(event.target.id)
      .then((response) => this.setState({ selectedMovie: response.movie }))
      .catch((err) => this.setState({ error: err }));
  };
}

export default App;