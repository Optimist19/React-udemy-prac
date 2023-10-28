// import React from "react";
// import { useState } from "react";
import Logo from "./Logo";
// import NumResults from "./NumResults";
// import Search from "./Search";

function NavBar({children}) {


  return (
    <nav className="nav-bar">
      <Logo />
      {children}
      {/* <Search />
      <NumResults  movies={movies}/> */}
    </nav>
  );
}

export default NavBar;
