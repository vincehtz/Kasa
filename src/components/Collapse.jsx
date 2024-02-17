import React, { useState } from "react";
import PropTypes from "prop-types";
import "../styles/Collapse.scss";

function Collapse({ title, content }) {
  // state
  const [selected, setSelected] = useState(false);

  // comportements
  const handleClick = () => {
    setSelected(!selected);
  };

  const collapseContentClasses = `collapse__content ${selected ? "show" : ""}`;

  // render
  return (
    <div className="collapse">
      <div className="collapse__title">
        <h2>{title}</h2>
        <span onClick={handleClick}>{selected ? "-" : "+"}</span>
      </div>
      <div className={collapseContentClasses}>
        <p>{content}</p>
      </div>
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
  id: PropTypes.string,
};

export default Collapse;
