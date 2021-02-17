import React from "react";
import "./MainNav.scss";
import { Link } from "react-scroll";

function MainNav() {
  return (
    <div>
      <nav className="top__nav">
        <ul className="top__nav-list">
          <li className="top__nav-list-item">Home</li>

          <li className="top__nav-list-item">
            <Link
              className="top__nav-list-item"
              to="section2"
              smooth={true}
              duration={1000}
            >
              About
            </Link>
          </li>
          <li className="top__nav-list-item">
            <Link
              className="top__nav-list-item"
              to="section3"
              smooth={true}
              duration={1000}
            >
              Explore
            </Link>
          </li>
          <li className="top__nav-list-item">
            <Link
              className="top__nav-list-item"
              to="section4"
              smooth={true}
              duration={1000}
            >
              News
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default MainNav;
