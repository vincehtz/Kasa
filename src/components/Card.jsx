import React from "react";
import PropTypes from "prop-types";
import "../styles/Card.scss";

function Card({ name, cover }) {
  const cardStyle = {
    backgroundImage: `url(${cover})`,
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
