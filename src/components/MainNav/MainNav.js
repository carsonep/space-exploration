import React from "react";
import "./MainNav.scss";

function MainNav() {
  return (
    <div>
      <nav className="top__nav">
        <ul className="top__nav-list">
          <li className="top__nav-list-item">Home</li>
          <li className="top__nav-list-item">About</li>
          <li className="top__nav-list-item">Explore</li>
          <li className="top__nav-list-item">News</li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNav;
