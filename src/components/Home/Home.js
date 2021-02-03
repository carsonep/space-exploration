import React from "react";
import Header from "../Header/Header";
import "./Home.scss";
import About from "../About/About";

function Home() {
  return (
    <div className="home__container">
      <Header />
      <About />
    </div>
  );
}

export default Home;
