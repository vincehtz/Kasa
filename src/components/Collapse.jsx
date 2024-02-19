import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import "../styles/Collapse.scss";

function Collapse({ title, content }) {
  // state
  const [selected, setSelected] = useState(false);
  const collapseContentClasses = `collapse__content ${selected ? "show" : ""}`;
  const arrowUp = <FontAwesomeIcon icon={faAngleUp} />;
  const arrowDown = <FontAwesomeIcon icon={faAngleDown} />;

  // comportements
  const handleClick = () => {
    setSelected(!selected);
  };

  // render
  return (
    <div className="collapse">
      <div className="collapse__title">
        <h3>{title}</h3>
        <span onClick={handleClick}>{selected ? arrowDown : arrowUp}</span>
      </div>
      <div className={collapseContentClasses}>
        <p>{content}</p>
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string,
  content: PropTypes.oneOfType([
    PropTypes.string, // Le contenu peut être une chaîne de caractères
    PropTypes.array, // Le contenu peut être un tableau de chaînes de caractères
  ]),
  id: PropTypes.string,
};

export default Collapse;
