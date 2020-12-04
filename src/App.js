import React, { Component } from "react";
import { Container, Row, Alert, Col } from "react-bootstrap";
import NavBar from "./Components/NavBar/NavBar";
import FeaturedMovies from "./Components/FeaturedMovies/FeaturedMovies";
import SelectedMovie from "./Components/SelectedMovie/SelectedMovie";
import Catalogue from "./Components/Catalogue/Catalogue";
import { getMovies, getMovie } from "./apiCalls";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: [],
      selectedMovie: 0,
      error: "",
      loader: true,
    };
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
    console.log(event.target);
    getMovie(event.target.id)
      .then((response) => this.setState({ selectedMovie: response.movie }))
      .catch((err) => this.setState({ error: err }));
  };

  render() {
    if (this.state.loader) {
      return (
        <img
          src="https://media.giphy.com/media/pVBUBqNdTdsVuiybM4/giphy-downsized.gif"
          alt="loading gif"
        ></img>
      );
    } else {
      return (
        <React.Fragment>
          <Container fluid>
            {this.state.error && (
              <Alert variant="danger">{this.state.error}</Alert>
            )}
            <NavBar returnToHome={this.returnToHome} />
            {!this.state.selectedMovie && <FeaturedMovies />}
            {!this.state.selectedMovie && (
              <Row className="justify-content-md-center">
                <Col>
                  <Catalogue
                    movies={this.state.movies}
                    handleClick={this.handleClick}
                  />
                </Col>
              </Row>
            )}
            {this.state.selectedMovie && (
              <SelectedMovie
                title={this.state.selectedMovie.title}
                tagline={this.state.selectedMovie.tagline}
                poster={this.state.selectedMovie.poster_path}
                backdrop={this.state.selectedMovie.backdrop_path}
                overview={this.state.selectedMovie.overview}
                release={this.state.selectedMovie.release_date}
                rating={this.state.selectedMovie.average_rating}
                genres={this.state.selectedMovie.genres}
                budget={this.state.selectedMovie.budget}
                revenue={this.state.selectedMovie.revenue}
                runtime={this.state.selectedMovie.runtime}
              />
            )}
          </Container>
        </React.Fragment>
      );
    }
  }
}

export default App;
