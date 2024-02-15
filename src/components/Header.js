import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.scss";

function Header() {
  return (
    <header>
      <nav className="navbar">
        <img src="logo.png" alt="Logo KASA" className="navbar__logo" />
        <div>
          <NavLink to="/">Accueil</NavLink>
          <NavLink to="/about">A Propos</NavLink>
        </div>
      </nav>
    </header>
  );
}

export default Header;
