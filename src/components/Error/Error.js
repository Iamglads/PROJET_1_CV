import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section className="section error-page">
      <div className="section-center">
        <h2 style={{ textAlign: "center" }}>404</h2>
        <p style={{ textAlign: "center" }}>
          Cette page n'existe pas. <br /> <br /> <br />{" "}
          <Link className="btn" to="/">
            Retourner à l'accueil !
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Error;
