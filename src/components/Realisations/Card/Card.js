import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { VscGithubInverted } from "react-icons/vsc";
import { FiMonitor } from "react-icons/fi";
import "./Card.scss";

const Card = ({ data, index }) => {
  const { title, langages, image, url, source, description } = data;

  return (
    <>
      <li className="achievements__item ">
        <a href={url}>
          {image ? <img src={image} alt={title} /> : <Skeleton />}
        </a>

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
        <p>{description || <Skeleton count={2} />}</p>
      </li>
    </>
  );
};

export default Card;
