// src/components/ArticleDetail.js
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import he from "he";

const ArticleDetail = (props, { onBack }) => {
  const { id: articleId } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticle = async () => {
      setLoading(true);
      const response = await axios.get(
        `https://www.kbatis.com/wp-json/wp/v2/posts/${articleId}?_embed`
      );
      setArticle(response.data);
      setLoading(false);

      console.log(response.data);
    };

    if (articleId) {
      fetchArticle();
    }
  }, [articleId]);

  if (loading) {
    return (
      <section className="section">
        <div className="section-center">
          <h4>Chargement...</h4>
        </div>
      </section>
    );
  }

  if (!article) {
    <section className="section">
      <div className="section-center">
        <p>Nous ne parvenons pas à trouver votre article !</p>
      </div>
    </section>;
  }

  const featureImage = article._embedded["wp:featuredmedia"][0].source_url;

  return (
    <section className="section">
      <div className="section-center">
        <h1>{he.decode(article.title.rendered)}</h1>
        <img
          className="feature-image"
          src={featureImage}
          alt={he.decode(article.title.rendered)}
        />
        <div dangerouslySetInnerHTML={{ __html: article.content.rendered }} />
        <Link to="/" className="btn" onClick={onBack}>
          Retour
        </Link>
      </div>
    </section>
  );
};

export default ArticleDetail;
