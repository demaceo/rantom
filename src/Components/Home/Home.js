import React from 'react';
import FeaturedMovies from '../FeaturedMovies/FeaturedMovies.js';
import Catalogue from '../Catalogue/Catalogue.js';
import './Home.scss';


function Home(props) {
  return(
    <React.Fragment>
       {/* <FeaturedMovies /> */}
       <Catalogue
       movies={props.movies}
       handleClick={props.handleClick}
       />
    </React.Fragment>
  )
}

export default Home;