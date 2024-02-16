import React from "react";
import PropTypes from "prop-types";
import "../styles/Banner.scss";

function Banner({ cover, opacity, title }) {
  const bannerStyle = {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, ${opacity}), rgba(0, 0, 0, ${opacity})), url(${cover})`,
  };

  return (
    <div className="banner" style={bannerStyle}>
      <h1>{title}</h1>
    </div>
  );
}

Banner.propTypes = {
  cover: PropTypes.string,
  opacity: PropTypes.string,
  title: PropTypes.string,
};
export default Banner;
