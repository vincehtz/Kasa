import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Gallery.scss";
import Card from "./Card";
import logementsList from "../data/logementsList.json";

function Gallery() {
  return (
    <div className="gallery">
      {logementsList.map((log) => {
        return (
          <NavLink to={`/product/${log.id}`} key={log.id}>
            <Card key={log.id} name={log.title} cover={log.cover} />
          </NavLink>
        );
      })}
    </div>
  );
}

export default Gallery;
