import "./About.scss";
import MarsRover from "../../img/mars-67522_640.jpg";
import SpaceBackground from "../../img/1253115.jpg";
import NasaPic from "../../img/nasa.jpg";
import SpaceX from "../../img/spacex-693229_640.jpg";
import NasaLogo from "../../img/nasalogo.png";

import React from "react";

function About() {
  return (
    <div className="about__container">
      <img
        className="about__container-image"
        src={SpaceBackground}
        alt="star background"
      />
      <h1 className="about__container-title">About Space Exploration</h1>

      <div className="about__container-description">
        <div className="media">
          <div className="img">
            <img src={NasaPic} alt="Placeholder" />
          </div>
          <h2 className="title">How it started</h2>
          <div className="content">
            <p>
              The “space race” was a Cold War competition between the United
              States and the Soviet Union to develop aerospace capabilities,
              including artificial satellites, unmanned space probes, and human
              spaceflight.
            </p>
          </div>
        </div>

        <div className="media media-flip">
          <div className="img">
            <img src={SpaceX} alt="Placeholder" />
          </div>
          <h2 className="title">Leading companies</h2>
          <div className="content">
            <p>
              Major achievements of SpaceX are in the reuse of orbital-class
              launch vehicles and cost reduction in the space launch industry.
              Most notable of these being the continued landings and relaunches
              of the first stage of Falcon 9. As of December 2020, SpaceX has
              used two separate first-stage boosters, B1049 and B1051, seven
              times each.[71] SpaceX is defined as a private space company and
              thus its achievements can also be counted as firsts by a private
              company.
            </p>
          </div>
        </div>

        <div className="media">
          <div className="img">
            <img src={MarsRover} alt="Placeholder" />
          </div>
          <h2 className="title">Curiosity</h2>
          <div className="content">
            <p>
              The Mars Science Laboratory and its rover centerpiece, Curiosity,
              is the most ambitious Mars mission yet flown by NASA. The rover
              landed on Mars in 2012 with a primary mission to find out if Mars
              is, or was, suitable for life. Another objective is to learn more
              about the Red Planet's environment.
            </p>
          </div>
        </div>

        <div className="media media-flip">
          <div className="img">
            <img src={NasaLogo} alt="Placeholder" />
          </div>
          <h2 className="title">NASA API</h2>
          <div className="content">
            <p>
              Are you a developer and interested in everything about space?
              Well, NASA provides a free API service for developers to use such
              as news of the days or even global mapping from their satellies
              for developers to use
            </p>
          </div>
          <div className="footer">
            <a
              className="footer-button"
              href="https://api.nasa.gov/"
              target="_blank"
              rel="noreferrer"
            >
              NASA API
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
