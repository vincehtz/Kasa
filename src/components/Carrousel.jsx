import React from "react";
import "../styles/Carrousel.scss";

function Carrousel() {
  return (
    <div className="flashcard__carrousel">
      <div className="carrousel__inner">
        <img
          src="https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg"
          alt="Aperçu du logement"
        />
      </div>
      <div className="carrousel__indicators"></div>
      <button className="carrousel__control-pev"></button>
      <button className="carrousel__control-next"></button>
    </div>
  );
}

export default Carrousel;
