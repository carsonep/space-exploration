import React from "react";
import "./TitleHeader.scss";

function TitleHeader() {
  return (
    <header className="title__header">
      <div className="title__header-container">
        <h2 className="title__header-start">Begin your Journey</h2>
        <h1 className="title__header-primary line-1 anim-typewriter">
          Space Exploration
        </h1>
        <ul className="title__header-list">
          <li className="title__list-component">Moon</li>
          <li className="title__list-component">Mars</li>
          <li className="title__list-component">Vesta</li>
        </ul>
      </div>
    </header>
  );
}

export default TitleHeader;
