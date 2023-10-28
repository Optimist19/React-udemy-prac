// import React from 'react'
import { useState } from "react";
// import MovieList from "./MovieList";

function Box({children}) {

  const [isOpen, setisOpen] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setisOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}

export default Box;
