// import React from 'react'
import { useState } from "react";
import Movies from "./Movies";

function MovieList({movies, onSelectMovie}) {

  return (
    <ul className="list list-movies">
      {movies?.map((movie) => (
        <Movies movie={movie} key={movie.imdbID} onSelectMovie={onSelectMovie}/>
      ))}
    </ul>
  );
}

export default MovieList;
