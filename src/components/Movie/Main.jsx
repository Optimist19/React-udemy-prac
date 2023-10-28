// import React from 'react'
// import { useState } from "react";
// import ListBox from "./ListBox";
// import WatchedBox from "./WatchedBox";

function Main({children}) {


  return (
    <main className="main">
      {/* <ListBox movies={movies}/>
      <WatchedBox /> */}
      {children}
    </main>
  );
}

export default Main;
