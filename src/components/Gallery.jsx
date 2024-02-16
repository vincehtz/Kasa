import React from "react";
import "../styles/Gallery.scss";
import Card from "./Card";
import logementsList from "../data/logementsList.json";

function Gallery() {
  // state
  // comportements

  //affichage
  return (
    <div className="gallery">
      {logementsList.map((log) => {
        return <Card key={log.id} name={log.title} />;
      })}
    </div>
  );
}

export default Gallery;
