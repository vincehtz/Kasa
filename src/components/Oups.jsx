import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Oups.scss";

function Oups() {
  return (
    <main>
      <span>404</span>
      <p>Oups! La page que vous demandez n&apos;existe pas.</p>
      <NavLink to="/">Retourner sur la page d&apos;accueil</NavLink>
    </main>
  );
}

export default Oups;
