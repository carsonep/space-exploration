import React from "react";
// import "../About/About.scss";
import SpaceBackground from "../../img/1253115.jpg";
import Mars from "../../img/mars_planet_PNG23.png";
import Moon from "../../img/moon_PNG52.png";
import Vesta from "../../img/vesta.png";

function Planets() {
  return (
    <div className="about__container">
      <img
        className="about__container-image"
        src={SpaceBackground}
        alt="star background"
      />
      <h1 className="about__container-title">Start Exploring</h1>

      <div className="about__container-description">
        <div className="media">
          <div className="img">
            <img src={Moon} alt="Placeholder" />
          </div>
          <h2 className="title">Moon</h2>
          <div className="content">
            <p>
              The Moon is a large natural object that orbits, or travels around,
              Earth. After the Sun it is the brightest object in the sky. The
              average distance between the Moon and Earth is about 238,900 miles
              (384,400 kilometers). Compared to the distance between other
              planets and Earth, this distance is small.
            </p>
          </div>
          <div className="footer">
            <a
              className="footer-button"
              href="https://api.nasa.gov/"
              target="_blank"
              rel="noreferrer"
            >
              Explore Moon
            </a>
          </div>
        </div>

        <div className="media media-flip">
          <div className="img">
            <img src={Mars} alt="Placeholder" />
          </div>
          <h2 className="title">Mars</h2>
          <div className="content">
            <p>
              Mars is sometimes called the Red Planet. ... Like Earth, Mars has
              seasons, polar ice caps, volcanoes, canyons, and weather. It has a
              very thin atmosphere made of carbon dioxide, nitrogen, and argon.
              There are signs of ancient floods on Mars, but now water mostly
              exists in icy dirt and thin clouds
            </p>
          </div>
          <div className="footer">
            <a
              className="footer-button"
              href="https://api.nasa.gov/"
              target="_blank"
              rel="noreferrer"
            >
              Explore Mars
            </a>
          </div>
        </div>

        <div className="media">
          <div className="img">
            <img src={Vesta} alt="Placeholder" />
          </div>
          <h2 className="title">Vesta</h2>
          <div className="content">
            <p>
              Vesta is the second most massive body in the asteroid belt,
              surpassed only by Ceres, which is classified as a dwarf planet.
              The brightest asteroid in the sky, Vesta is occasionally visible
              from Earth with the naked eye. ... The Dawn mission orbited Vesta
              in 2011, providing new insights into this rocky world.
            </p>
          </div>
          <div className="footer">
            <a
              className="footer-button"
              href="https://api.nasa.gov/"
              target="_blank"
              rel="noreferrer"
            >
              Explore Vesta
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planets;
