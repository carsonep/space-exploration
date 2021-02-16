import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="footer__section">
      <h1 className="footer__section-title">Project by Carson Peterson</h1>
      <div className="footer__section-container">
        <div className="footer__section-contact">
          <h2 className="footer__section-contact-title">Contact Me</h2>
          <p>Phone: 405-919-9714</p>
          <p>Email: Carsonepeterson@gmail.com</p>
        </div>
        <div className="footer__section-social">
          <ul className="footer__section-social-list">
            <li className="footer__section-social-item">GitHub</li>
            <li className="footer__section-social-item">Portfolio</li>
            <li className="footer__section-social-item">LinkedIn</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
