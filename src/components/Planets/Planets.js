import React, { useEffect } from "react";
import "../About/About.scss";
import SpaceBackground from "../../img/1253115.jpg";
import Mars from "../../img/mars_planet_PNG23.png";
import Moon from "../../img/moon_PNG52.png";
import Mercury from "../../img/mercury.png";
import { NavLink } from "react-router-dom";
import WOW from "wowjs";

function Planets() {
  useEffect(() => {
    new WOW.WOW({ live: false }).init();
  });

  return (
    <div className="about__container">
      <img
        className="about__container-image"
        src={SpaceBackground}
        alt="star background"
      />
      <h1 className="about__container-title animate__animated wow animate__zoomIn animated">
        Start Exploring
      </h1>

      <div className="about__container-description">
        <div className="media animate__animated wow animate__fadeInLeft animated">
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
            <NavLink to="/explore/moon">
              <button className="footer-button">Explore Moon</button>
            </NavLink>
          </div>
        </div>

        <div className="media media-flip animate__animated wow animate__fadeInRight animated">
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
            <NavLink to="/explore/mars">
              <button
                className="footer-button"
                target="_blank"
                rel="noreferrer"
              >
                Explore Mars
              </button>
            </NavLink>
          </div>
        </div>

        <div className="media animate__animated wow animate__fadeInLeft animated">
          <div className="img">
            <img src={Mercury} alt="Placeholder" />
          </div>
          <h2 className="title">Mercury</h2>
          <div className="content">
            <p>
              The smallest planet in our solar system and nearest to the Sun,
              Mercury is only slightly larger than Earth's Moon. From the
              surface of Mercury, the Sun would appear more than three times as
              large as it does when viewed from Earth, and the sunlight would be
              as much as seven times brighter. Despite its proximity to the Sun,
              Mercury is not the hottest planet in our solar system – that title
              belongs to nearby Venus, thanks to its dense atmosphere.
            </p>
          </div>
          <div className="footer">
            <NavLink to="/explore/mercury">
              <button
                className="footer-button"
                target="_blank"
                rel="noreferrer"
              >
                Explore Mercury
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Planets;
