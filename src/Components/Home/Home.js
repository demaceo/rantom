import React from 'react';
import Catalogue from '../Catalogue/Catalogue.js';
import './Home.scss';


function Home(props) {
  return(
    <>
       <Catalogue
       movies={props.movies}
       />
    </>
  )
}

export default Home;