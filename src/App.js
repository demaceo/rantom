import React, { Component } from 'react'
import Catalogue from './Catalogue'
import './App.css';

class App extends Component {
    constructor(){
       super()
       this.state = {

       }

        
    }
    render() {
        return (
          <React.Fragment>
            <h1>HELLOOOOOO WORLD</h1>
            <Catalogue />
          </React.Fragment>
        );
    }
}


export default App;
