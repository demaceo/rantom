import React from 'react'
import './Catalogue.css'

function Catalogue(props){
    return (
        <main className="catalogue">
            <p>{props.movies[0].title}</p>
        </main>
    )
}

export default Catalogue