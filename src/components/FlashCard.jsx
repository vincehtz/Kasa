import React from "react";
import { useParams } from "react-router-dom";
import Carrousel from "./Carrousel";
import Collapse from "./Collapse";
import Tag from "./Tag";
import RateScale from "./RateScale";
import "../styles/FlashCard.scss";
import logementsList from "../data/logementsList.json";

function FlashCard() {
  const { productId } = useParams();

  const logementConsulte = logementsList.find((log) => log.id === productId);
  console.log(logementConsulte);

  const profilePicStyle = {
    backgroundImage: `url(${logementConsulte.host.picture})`,
  };

  logementConsulte.equipments.map((equipment) => {
    console.log(equipment);
  });

  return (
    <div className="flashcard">
      <Carrousel />
      <div className="flashcard__info">
        <div className="flashcard__info__left-block">
          <h1>{logementConsulte.title}</h1>
          <p>{logementConsulte.location}</p>
          <div className="flashcard__info__left-block__tags">
            {logementConsulte.tags.map((tag) => {
              return <Tag key={tag} tag={tag} />;
            })}
          </div>
        </div>
        <div className="flashcard__info__right-block">
          <div className="flashcard__info__right-block__host">
            <h4>{logementConsulte.host.name}</h4>
            <div
              className="flashcard__info__right-block__host__picture"
              style={profilePicStyle}
            ></div>
          </div>
          <RateScale />
        </div>
      </div>
      <div className="flashcard__collapses">
        <Collapse title="Description" content={logementConsulte.description} />
        <Collapse title="Equipements" content={logementConsulte.equipments} />
      </div>
    </div>
  );
}

export default FlashCard;
