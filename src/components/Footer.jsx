import React from "react";
import "../styles/Footer.scss";
import logoWhite from "../assets/logo-white.png";

function Footer() {
  return (
    <footer>
      <img src={logoWhite} alt="Logo Kasa blanc" />
      <p className="footer__text">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
