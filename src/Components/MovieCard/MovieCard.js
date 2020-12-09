import React from "react";
import { Card } from "react-bootstrap";
import "./MovieCard.scss";
import { Link } from 'react-router-dom';

function MovieCard(props) {
  return (
    <Link to={`/movie/${props.id}`}>
      <Card
        alt={props.title}
        bg={"dark"}
        id={props.id}
        className="card bg-dark text-white"
      >
        <Card.Img
          className="card-img"
          src={props.poster}
          alt={props.title}
        />
        <Card.ImgOverlay id={props.id}>
          <Card.Title className="card-details">{props.title}</Card.Title>
          <Card.Text className="card-details">
            Released: {props.release}
          </Card.Text>
          <Card.Text className="card-details">
            Average Rating: {Math.floor(props.rating)}
          </Card.Text>
        </Card.ImgOverlay>
      </Card>
    </Link>
  );
}

export default MovieCard;
