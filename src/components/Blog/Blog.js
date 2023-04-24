// src/components/ArticleList.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import he from "he";
import Skeleton from "react-loading-skeleton";
import ArticleCard from "./ArticleCard";

const ArticleList = ({ onArticleClick }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://kbatis.com/wp-json/wp/v2/posts?_embed&per_page=3"
      );
      setArticles(response.data);
      setLoading(false);
    };

    fetchArticles();
  }, []);

  const renderSkeletons = () => {
    const skeletonCount = 3;
    const skeletons = [];
    const customColor = "#FFFFFF"; // Remplacez cette valeur par la couleur de votre choix

    for (let i = 0; i < skeletonCount; i++) {
      skeletons.push(
        <div
          key={`skeleton-${i}`}
          style={{
            backgroundColor: "rgba(250, 250, 250, 0.1)", // Ajout d'un fond gris pour vérifier la visibilité
            margin: "10px",
            padding: "10px",
          }}
        >
          <Skeleton height={200} width={300} color={customColor} />
          <Skeleton height={40} color={customColor} />
          <Skeleton height={20} color={customColor} />
          <Skeleton height={20} color={customColor} />
          <Skeleton height={20} color={customColor} />
        </div>
      );
    }

    return skeletons;
  };

  const renderArticle = () => {
    return articles.map((article) => (
      <ArticleCard
        key={article.id}
        articleId={article.id}
        featureImage={article._embedded["wp:featuredmedia"][0].source_url}
        title={he.decode(article.title.rendered)}
        description={article.excerpt.rendered}
        authorName={article._embedded.author[0].name}
        onClick={() => onArticleClick(article.id)}
      />
    ));
  };

  return (
    <section id="blog" className="section blog">
      <div className="section-title">
        <h2>Blog</h2>
        <div className="underline"></div>
      </div>

      <div className="section-center blog-center">
        {loading ? renderSkeletons() : renderArticle()}
      </div>
    </section>
  );
};

export default ArticleList;
