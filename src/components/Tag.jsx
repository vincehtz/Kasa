import React from "react";
import "../styles/Tag.scss";
import PropTypes from "prop-types";

function Tag({ tag }) {
  return (
    <div className="tag">
      <h5>{tag}</h5>
    </div>
  );
}

Tag.propTypes = {
  tag: PropTypes.string,
};

export default Tag;
