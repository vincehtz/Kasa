import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import "../styles/Carrousel.scss";

function Carrousel({ pictures }) {
  const arrowLeft = <FontAwesomeIcon icon={faAngleLeft} />;
  const arrowRight = <FontAwesomeIcon icon={faAngleRight} />;

  return (
    <div className="flashcard__carrousel">
      <div className="carrousel__inner">
        {pictures.map((pic, i) => {
          return (
            <div className="carrousel_item" key={i}>
              <img src={pic} alt="" />
            </div>
          );
        })}
      </div>
      <div className="carrousel__indicators">1/4</div>
      <div className="carrousel__control">
        <button className="carrousel__control-pev">{arrowLeft}</button>
        <button className="carrousel__control-next">{arrowRight}</button>
      </div>
    </div>
  );
}

Carrousel.propTypes = {
  pictures: PropTypes.array,
};
export default Carrousel;
