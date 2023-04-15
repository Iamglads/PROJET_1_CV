// src/components/ArticleDetail.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const ArticleDetail = ({ articleId, onBack }) => {
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const fetchArticle = async () => {
      const response = await axios.get(
        `https://example.com/wp-json/wp/v2/posts/${articleId}?_embed`
      );
      setArticle(response.data);
    };

    if (articleId) {
      fetchArticle();
    }
  }, [articleId]);

  if (!article) {
    return null;
  }

  return (
    <div>
      <h1>{article.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
      <button className="btn" onClick={onBack}>
        Retour
      </button>
    </div>
  );
};

export default ArticleDetail;
