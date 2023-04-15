import React from "react";

const ArticleCard = ({
  featureImage,
  title,
  description,
  authorAvatar,
  authorName,
  onClick,
}) => (
  <div className="card">
    <div className="card-front">
      <img src={featureImage} alt={title} />
      <h4>{title}</h4>
    </div>
    <button className="btn" onClick={onClick}>
      Lire
    </button>
  </div>
);

export default ArticleCard;
