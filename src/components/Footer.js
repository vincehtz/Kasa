import React from "react";
import "../styles/Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <img
        src="logo-white.png"
        alt="Logo Kasa blanc"
        className="footer__logo"
      />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
