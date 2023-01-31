import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="section-center">
        <h2>404</h2>
        <p>
          Cette page n'existe pas. <Link to="/">Retourner à l'accueil !</Link>
        </p>
      </div>
    </section>
  );
};

export default Error;
