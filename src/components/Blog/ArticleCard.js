import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({
  featureImage,
  title,
  description,
  authorAvatar,
  authorName,
  onClick,
  articleId,
}) => (
  <div className="card">
    <div className="card-front">
      <img src={featureImage} alt={title} />
      <h4>{title}</h4>
    </div>
    <Link to={`/post/${articleId}`} className="btn" onClick={onClick}>
      Lire
    </Link>
  </div>
);

export default ArticleCard;
