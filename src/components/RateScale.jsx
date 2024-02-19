import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "../styles/RateScale.scss";

function RateScale() {
  const ratingStar = <FontAwesomeIcon icon={faStar} />;

  return (
    <div className="rating-scale">
      {ratingStar}
      {ratingStar}
      {ratingStar}
      {ratingStar}
      {ratingStar}
    </div>
  );
}

export default RateScale;
