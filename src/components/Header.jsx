import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Header.scss";
import logo from "../assets/logo.png";

function Header() {
  return (
    <header>
      <img src={logo} alt="Logo KASA" />
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
