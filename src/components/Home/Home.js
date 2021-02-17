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
      <section id="section2">
        <About />
      </section>
      <section id="section3">
        <Planets />
      </section>
      <section id="section4">
        <News />
      </section>

      <Footer />
    </div>
  );
}

export default Home;
