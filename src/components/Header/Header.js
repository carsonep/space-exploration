import React from "react";
import TitleHeader from "../TitleHeader/TitleHeader";
import "./Header.scss";
import HeaderImage from "../../img/planet-581239.jpg";
import MainNav from "../MainNav/MainNav";
import SideNav from "../SideNav/SideNav";

function Header() {
  return (
    <div className="header__container">
      <img className="header__container-image" src={HeaderImage} alt="Hero" />
      <MainNav />
      <SideNav />
      <TitleHeader />
    </div>
  );
}

export default Header;
