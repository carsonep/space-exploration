import React from "react";
import "./TitleHeader.scss";
import { NavLink } from "react-router-dom";

function TitleHeader() {
  return (
    <header className="title__header">
      <div className="title__header-container">
        <h2 className="title__header-start">Begin your Journey</h2>
        <h1 className="title__header-primary line-1 anim-typewriter">
          Space Exploration
        </h1>
        <ul className="title__header-list">
          <NavLink to="/explore/moon">
            <li className="title__list-component">Moon</li>
          </NavLink>
          <NavLink to="/explore/mars">
            <li className="title__list-component">Mars</li>
          </NavLink>
          <li className="title__list-component">Vesta</li>
        </ul>
      </div>
    </header>
  );
}

export default TitleHeader;
