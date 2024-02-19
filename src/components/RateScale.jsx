import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/RateScale.scss";

function RateScale({ scaleValue }) {
  const redStyle = {
    color: "#FF6060",
  };
  const greyStyle = {
    color: "#E3E3E3",
  };
  const redStar = <FontAwesomeIcon icon={faStar} style={redStyle} />;
  const greyStar = <FontAwesomeIcon icon={faStar} style={greyStyle} />;

  const range = [1, 2, 3, 4, 5];

  return (
    <div className="rating-scale">
      {range.map((score, i) => {
        return scaleValue >= score ? (
          <span key={i}>{redStar}</span>
        ) : (
          <span key={i}>{greyStar}</span>
        );
      })}
    </div>
  );
}

RateScale.propTypes = {
  scaleValue: PropTypes.string,
};

export default RateScale;
