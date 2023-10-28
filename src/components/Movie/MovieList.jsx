// import React from 'react'
import { useState } from "react";
import Movies from "./Movies";

function MovieList({movies}) {

  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movies movie={movie} key={movie.imdbID}/>
      ))}
    </ul>
  );
}

export default MovieList;
