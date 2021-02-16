import React, { useEffect } from "react";
import "./TitleHeader.scss";
import { NavLink } from "react-router-dom";
import WOW from "wowjs";

function TitleHeader() {
  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  });
  return (
    <header className="title__header">
      <div className="title__header-container">
        <h2 className="title__header-start animate__animated wow animate__fadeInDown animate__delay-1s">
          Begin your Journey
        </h2>
        <h1 className="title__header-primary animate__animated wow animate__fadeIn">
          Space Exploration
        </h1>
        <ul className="title__header-list animate__animated wow animate__fadeInUp animate__delay-1s">
          <NavLink to="/explore/moon" style={{ textDecoration: "none" }}>
            <li className="title__list-component">Moon</li>
          </NavLink>
          <NavLink to="/explore/mars" style={{ textDecoration: "none" }}>
            <li className="title__list-component">Mars</li>
          </NavLink>
          <NavLink to="/explore/mercury" style={{ textDecoration: "none" }}>
            <li className="title__list-component">Mercury</li>
          </NavLink>
        </ul>
      </div>
    </header>
  );
}

export default TitleHeader;
