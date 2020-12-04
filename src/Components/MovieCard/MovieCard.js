import React from 'react'
import { Card } from 'react-bootstrap'
import './MovieCard.scss'

function MovieCard(props) {
    return (
        <Card bg={"dark"} className="card" id={props.id} onClick={props.handleClick} className="bg-dark text-white">
          <Card.Img className="card-img" src={props.poster} alt={props.title} />
          <Card.ImgOverlay className="card-text">
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>Released: {props.release}</Card.Text>
            <Card.Text>Average Rating: {Math.floor(props.rating)}</Card.Text>
          </Card.ImgOverlay>
        </Card>
        // <img src={props.poster} alt={props.title} id={props.id} onClick={props.handleClick} />
        // <h3>{props.title}</h3>
    );

}


export default MovieCard;