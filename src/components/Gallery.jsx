import React from "react";
import "../styles/Gallery.scss";
import Card from "./Card";
import logementsList from "../data/logementsList.json";

function Gallery() {
  return (
    <div className="gallery">
      {logementsList.map((log) => {
        return <Card key={log.id} name={log.title} cover={log.cover} />;
      })}
    </div>
  );
}

export default Gallery;
