import React, { Component } from 'react'
import NavBar from './Components/NavBar/NavBar'
import SelectedMovie from './Components/SelectedMovie/SelectedMovie'
import Catalogue from './Components/Catalogue/Catalogue'
import movieData from './mockData'
import './App.css';

class App extends Component {
    constructor(){
       super()
       this.state = { 
           movies: movieData.movies,
           selectedMovie: 0
        }
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
        return (
          <React.Fragment>
            <NavBar 
            returnToHome={this.returnToHome}
            />
            {!this.state.selectedMovie && (
              <Catalogue
                movies={this.state.movies}
                handleClick={this.handleClick}
              />
            )}
            {this.state.selectedMovie && (
            <SelectedMovie 
            movieID={this.state.selectedMovie.id}
            poster={this.state.selectedMovie.src}
            title={this.state.selectedMovie.alt}
            />
            )}
            {console.log(this.state.selectedMovie)}
          </React.Fragment>
        );
    }
}


export default App;
