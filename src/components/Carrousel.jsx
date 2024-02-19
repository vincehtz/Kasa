import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/Carrousel.scss";

function Carrousel({ pictures }) {
  const [currentPicture, setCurrentPicture] = useState(0);
  console.log(currentPicture);

  const arrowLeft = <FontAwesomeIcon icon={faAngleLeft} />;
  const arrowRight = <FontAwesomeIcon icon={faAngleRight} />;

  // Comportements
  const leftBtnClick = () => {
    setCurrentPicture((prevPic) => {
      return prevPic === 0 ? pictures.length - 1 : prevPic - 1;
    });
  };
  const rightBtnClick = () => {
    setCurrentPicture((nextPic) => {
      return nextPic === pictures.length - 1 ? 0 : nextPic + 1;
    });
  };

  console.log(currentPicture);

  return (
    <div className="flashcard__carrousel">
      <div className="carrousel__inner">
        {pictures.map((pic, i) => {
          return (
            <div
              className={`carrousel_item ${
                i === currentPicture ? "active" : ""
              }`}
              key={i}
            >
              <img src={pic} alt={`Photo n°${i + 1} du logement`} />
            </div>
          );
        })}
      </div>
      <div className="carrousel__indicators">
        {currentPicture + 1}/{pictures.length}
      </div>

      <div className="carrousel__control">
        <button className="carrousel__control-pev" onClick={leftBtnClick}>
          {arrowLeft}
        </button>
        <button className="carrousel__control-next" onClick={rightBtnClick}>
          {arrowRight}
        </button>
      </div>
    </div>
  );
}

Carrousel.propTypes = {
  pictures: PropTypes.array,
};
export default Carrousel;
