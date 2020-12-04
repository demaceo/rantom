import React, { Component } from 'react'
import { Container, Row } from 'react-bootstrap'
import NavBar from './Components/NavBar/NavBar'
import FeaturedMovies from './Components/FeaturedMovies/FeaturedMovies'
import SelectedMovie from './Components/SelectedMovie/SelectedMovie'
import Catalogue from './Components/Catalogue/Catalogue'
// import movieData from './mockData'
import { getMovies } from './apiCalls'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

class App extends Component {
    constructor(){
       super()
       this.state = { 
           movies: [],
           selectedMovie: 0,
           error: '',
           loader: true
        }
    }

    componentDidMount() {
      getMovies()
      .then(response => this.setState({ movies: response.movies }))
      .then(this.setState({ loader: false }))
      .catch(err => this.setState({ error: err }))
      
    }

    returnToHome = event => {
      this.setState({
        selectedMovie: 0
      })
    }

    handleClick = event => {
        this.setState({ 
            selectedMovie: event.target
        })
    }

    render() {
      if(this.state.loader) {
        return(
          <img src="https://media.giphy.com/media/pVBUBqNdTdsVuiybM4/source.gif" alt="loading gif"></img>
        )
      } else {
        return (
          <React.Fragment>
            <Container>
                  <NavBar 
                  returnToHome={this.returnToHome}
                  />
              {!this.state.selectedMovie && (
                  <Row>
                    <FeaturedMovies />
                  </Row>            
              )}
              {!this.state.selectedMovie && (
                <Row>
                  <Catalogue
                  movies={this.state.movies}
                  handleClick={this.handleClick}
                />
                </Row>
              )}
              {this.state.selectedMovie && (
              <SelectedMovie 
              movieID={this.state.selectedMovie.id}
              poster={this.state.selectedMovie.src}
              title={this.state.selectedMovie.alt}
              />
              )}
            </Container>
          </React.Fragment>
        );
      }
    }
}


export default App;
