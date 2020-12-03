import React, { Component } from 'react'
import Catalogue from './Components/Catalogue/Catalogue'
import movieData from './mockData'
import './App.css';

class App extends Component {
    constructor(){
       super()
       this.state = { 
           movies: movieData.movies
        }
    }
    render() {
        return (
          <React.Fragment>
            <h1>HELLOOOOOO WORLD</h1>
            <Catalogue movies={this.state.movies} />
          </React.Fragment>
        );
    }
}


export default App;
