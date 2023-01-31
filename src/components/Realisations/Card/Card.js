import React, { useState, useEffect } from "react";

const Card = ({ data, index }) => {
  const { title, langages, image, url, source, description } = data;

  return (
    <a href={url} className="project-2">
      <article className="project">
        <img src={image} alt={title} className="project-img" />
        <div className="project-info">
          <p className="description">{description}</p>
        </div>
      </article>
    </a>
  );
};

export default Card;
