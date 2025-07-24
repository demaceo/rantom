import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../NavBar/NavBar";
import SelectedMovie from "../SelectedMovie/SelectedMovie";
import "./MovieDetailsPage.scss";

function MovieDetailsPage() {
  const { id } = useParams();
  
  return (
    <>
      <NavBar />
      <SelectedMovie id={parseInt(id)} />
    </>
  );
}

export default MovieDetailsPage;
