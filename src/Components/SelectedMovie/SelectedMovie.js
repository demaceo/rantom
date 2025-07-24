import React, { Component } from "react";
import { getMovie } from "../../apiCalls";
import Loader from "../Loader/Loader.js";
import "./SelectedMovie.scss";

class SelectedMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: {},
    };
  }

  render() {
    if (!this.state.movie.id) {
      return <Loader error={this.state.error} />;
    }
    return (
      <>
        <section className="selectedMovie">
          <img
            width="100%"
            src={this.state.movie.backdrop_path}
            alt={`backdrop for ${this.state.movie.title}`}
          />

          <section className="movie-info">
            <section>
              <h1>{this.state.movie.title}</h1>
              <h2>{this.state.movie.tagline}</h2>
            </section>
            <section>
              <p>
                <u>Overview:</u> {this.state.movie.overview}
              </p>
              <p>
                <u>Release Date:</u> {this.state.movie.release_date}
              </p>
              <p>
                <u>Rating:</u> {this.tomatilloRating()}
              </p>
              <ul>
                <u>Genres:</u>{" "}
                {this.state.movie.genres ? this.generateGenreList() : "N/A"}
              </ul>
              <p>
                <u>Budget:</u>{" "}
                {this.state.movie.budget
                  ? "$" + this.state.movie.budget
                  : "N/A"}
              </p>
              <p>
                <u>Revenue:</u>{" "}
                {this.state.movie.revenue
                  ? "$" + this.state.movie.revenue
                  : "N/A"}
              </p>
              <p>
                <u>Duration:</u>{" "}
                {this.state.movie.runtime
                  ? this.state.movie.runtime + " minutes"
                  : "N/A"}
              </p>
            </section>
          </section>
        </section>
      </>
    );
  }

  componentDidMount() {
    getMovie(this.props.id)
      .then((response) => this.setState({ movie: response.movie }))
      .catch((err) => this.setState({ error: err }));
  }

  generateGenreList() {
    return this.state.movie.genres.map((item, index) => (
      <li key={index}>{item}</li>
    ));
  }

  tomatilloRating() {
    let array = [];
    while (array.length !== Math.round(this.state.movie.average_rating)) {
      array.push(" ⭐️ ");
    }
    return array;
  }
}

export default SelectedMovie;
