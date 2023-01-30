import React, { useState, useEffect } from "react";

const Card = ({ data, index }) => {
  const { title, langages, image, url, source, description } = data;

  return (
    <a href={url} className="project-2">
      <article className="project">
        <img src={image} alt={title} className="project-img" />
        <div className="project-info">
          <p className="description">{description}</p>
          <div className="categories">
            {langages.map((langage, index) => {
              return <span key={index}>{langage}</span>;
            })}
          </div>
        </div>
      </article>
    </a>
  );
};

export default Card;
