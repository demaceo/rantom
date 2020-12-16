import React, { Component } from "react";
import NavBar from "./Components/NavBar/NavBar";
import FeaturedMovies from "./Components/FeaturedMovies/FeaturedMovies";
import SelectedMovie from "./Components/SelectedMovie/SelectedMovie";
import { getMovies } from "./apiCalls";
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
                <NavBar />
                <DropMenu />
                <Home
                  movies={this.filteredMovies(parseInt(match.params.rating))}
                />
                {this.filteredMovies(parseInt(match.params.rating)).length ===
                  0 && (
                  <div className="no-rating">
                    <h1>No movies with that rating</h1>
                    <img
                      src="http://forgifs.com/gallery/d/301665-4/Girl-trips-spills-popcorn.gif"
                      alt="gif of lady falling"
                    />
                  </div>
                )}
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
          <NavBar />
          <DropMenu />
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

  filteredMovies(rating) {
    return this.state.movies.filter((movie) => {
      return Math.round(movie.average_rating) === rating;
    });
  }
}

export default App;
