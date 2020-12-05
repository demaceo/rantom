import React from "react";
import { Card } from "react-bootstrap";
import "./MovieCard.scss";

function MovieCard(props) {
  return (
    <Card
      bg={"dark"}
      id={props.id}
      onClick={props.handleClick}
      className="card bg-dark text-white"
    >
      <Card.Img className="card-img" src={props.poster} alt={props.title} />
      <Card.ImgOverlay id={props.id}>
        <Card.Title className="card-details">{props.title}</Card.Title>
        <Card.Text className="card-details">Released: {props.release}</Card.Text>
        <Card.Text className="card-details">Average Rating: {Math.floor(props.rating)}</Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
}

export default MovieCard;
