import React from "react";
import "./Favourites.css";

function Header({ isMenuOpen, setIsMenuOpen }) {
  return (
    <>
      <header className="site-header">
        <h1 className="site-heading">Red Ant Comics</h1>
        <button
          className="favourites-toggle js-favourites-toggle open"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        ></button>
      </header>
    </>
  );
}

export default Header;
