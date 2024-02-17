import React from "react";
import "../styles/Values.scss";
import Collapse from "./Collapse";
import valeursList from "../data/valeursList.json";

function Values() {
  return (
    <div className="values-gallery">
      {valeursList.map((val) => {
        return (
          <Collapse key={val.id} title={val.title} content={val.content} />
        );
      })}
    </div>
  );
}

export default Values;
