import React, { useEffect, useRef } from "react";
import Header from "../Header/Header";
import "./Home.scss";
import About from "../About/About";
import Planets from "../Planets/Planets";
import News from "../News/News";
import Footer from "../Footer/Footer";
import { gsap } from "gsap";

function Home() {
  return (
    <div className="home__container" ref={(el) => (pagesAni = el)}>
      <Header className="description panel blue" />
      <About className="panel red" />
      <Planets className="panel orange" />
      <News className="panel purple" />
      <Footer className="panel green" />
    </div>
  );
}

export default Home;
