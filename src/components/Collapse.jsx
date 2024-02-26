import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import "../styles/Collapse.scss";

function Collapse({ title, content }) {
  // state
  const [selected, setSelected] = useState(false);
  const collapseContentClasses = `collapse__content ${selected ? "show" : ""}`;

  // comportements
  const handleClick = () => {
    setSelected(!selected);
  };

  // Styles
  const arrowStyles = {
    transform: selected ? "rotate(180deg)" : "rotate(0deg)",
    transition: "transform 0.3s ease-in-out",
  };

  // render
  return (
    <div className="collapse">
      <div className="collapse__title">
        <h3>{title}</h3>
        <span onClick={handleClick}>
          <FontAwesomeIcon icon={faAngleUp} style={arrowStyles} />
        </span>
      </div>
      <div className={collapseContentClasses}>
        <p>{content}</p>
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  id: PropTypes.string,
};

export default Collapse;
