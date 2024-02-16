import React from "react";
import PropTypes from "prop-types";
import "../styles/Card.scss";

function Card({ name, cover }) {
  const cardStyle = {
    backgroundImage: `linear-gradient(rgba(255, 255, 255, 0), rgba(10, 10, 10, 0), rgba(4, 4, 4, 0.2), rgba(0, 0, 0, 0.5)), url(${cover})`,
  };

  return (
    <div className="card" style={cardStyle}>
      <h3>{name}</h3>
    </div>
  );
}

Card.propTypes = {
  name: PropTypes.string,
  cover: PropTypes.string,
};

export default Card;
