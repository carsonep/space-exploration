import React from "react";
import "./HomeButton.scss";

import { AiFillHome } from "react-icons/ai";

function HomeButton() {
  return (
    <div className="home__btn">
      <AiFillHome className="home__btn-home" />
    </div>
  );
}

export default HomeButton;
