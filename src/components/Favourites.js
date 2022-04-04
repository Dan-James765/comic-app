import React from "react";
import "./Favourites.css";

function Favourites({ isMenuOpen, setIsMenuOpen }) {
  return (
    <>
      <div id="favourites-panel" className="favourites-panel open">
        <div className="favourites-header">
          <h2>Favourites</h2>
          <button
            className="close js-close"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          ></button>
        </div>
        <div className="favourites-content">
          <ul className="favourites-list">
            Template for list items:
            <li>
              Comic name
              <button className="remove js-remove"></button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Favourites;
