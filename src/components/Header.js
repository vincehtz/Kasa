import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.scss";

function Header() {
  // Comportement (fonction)

  // render (affichage)
  return (
    <header>
      <img src="logo.png" alt="Logo KASA" />
      <nav className="navbar">
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
