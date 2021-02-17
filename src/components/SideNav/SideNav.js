import React from "react";
import "./SideNav.scss";
import { Link } from "react-scroll";

function SideNav() {
  return (
    <div className="side__nav">
      <ul className="side__nav-list">
        <li className="side__nav-list-item">
          <Link
            className="side__nav-list-item"
            to="section1"
            smooth={true}
            duration={1000}
          >
            01
          </Link>
        </li>
        <li className="side__nav-list-item">
          <Link
            className="side__nav-list-item"
            to="section2"
            smooth={true}
            duration={1000}
          >
            02
          </Link>
        </li>
        <li className="side__nav-list-item">
          <Link
            className="side__nav-list-item"
            to="section3"
            smooth={true}
            duration={1000}
          >
            03
          </Link>
        </li>
        <li className="side__nav-list-item">
          <Link
            className="side__nav-list-item"
            to="section4"
            smooth={true}
            duration={1000}
          >
            04
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default SideNav;
