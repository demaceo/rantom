import React from 'react';
import Catalogue from '../Catalogue/Catalogue.js';
import './Home.scss';


function Home(props) {
  return(
    <React.Fragment>
       <Catalogue
       movies={props.movies}
       
       />
    </React.Fragment>
  )
}

export default Home;