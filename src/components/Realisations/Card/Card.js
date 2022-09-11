import React from "react";
import { VscGithubInverted } from "react-icons/vsc";
import { FiMonitor } from "react-icons/fi";
import "./Card.scss";

const Card = ({ data }) => {
  const { title, langages, image, url, source, description } = data;
  return (
    <>
      <li className="achievements__item">
        <img src={image} alt={title} />
        <div className="urls">
          <a href={url} target="_blank" rel="noreferrer">
            <FiMonitor />
          </a>
          <a href={source} target="_blank" rel="noreferrer">
            <VscGithubInverted />
          </a>
        </div>
        <div className="categories">
          {langages.map((langage, index) => {
            return <span key={index}>{langage}</span>;
          })}
        </div>
        <p>{description.substring(0, 80)}</p>
      </li>
    </>
  );
};

export default Card;
