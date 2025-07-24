import React, { Component } from "react";
import NavBar from "./Components/NavBar/NavBar";
import FeaturedMovies from "./Components/FeaturedMovies/FeaturedMovies";
import FilteredMovies from "./Components/FilteredMovies/FilteredMovies";
import MovieDetailsPage from "./Components/MovieDetailsPage/MovieDetailsPage";
import { getMovies } from "./apiCalls";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { Routes, Route } from "react-router-dom";
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
      return <Loader error={this.state.error} />;
    }
    return (
      <Routes>
        <Route
          path="/movies/ratings/:rating"
          element={<FilteredMovies movies={this.state.movies} />}
        />
        <Route
          path="/movie/:id"
          element={<MovieDetailsPage />}
        />
        <Route 
          path="/" 
          element={
            <>
              <FeaturedMovies />
              <NavBar />
              <DropMenu />
              <Home movies={this.state.movies} />
            </>
          } 
        />
      </Routes>
    );
  }

  componentDidMount() {
    getMovies()
      .then((response) => {
        this.setState({ movies: response.movies, loader: false });
      })
      .catch((err) => this.setState({ error: err, loader: false }));
  }
}

export default App;
