import React from "react";
import Header from "../Header/Header";
import "./Home.scss";
import About from "../About/About";
import Planets from "../Planets/Planets";
import News from "../News/News";
import Footer from "../Footer/Footer";

function Home() {
  return (
    <div>
      <Header />

      <About />
      <Planets />
      <News />
      <Footer />
    </div>
  );
}

export default Home;
