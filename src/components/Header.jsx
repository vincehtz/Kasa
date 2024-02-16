import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.scss";

function Header() {
  return (
    <header>
      <img src="./assets/logo.png" alt="Logo KASA" />
      <nav>
        <NavLink to="/" className="navbar__link">
          Accueil
        </NavLink>
        <NavLink to="/about" className="navbar__link">
          A Propos
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;
