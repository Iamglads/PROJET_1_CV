import React from "react";
import "./Apropos.scss";

const Apropos = () => {
  return (
    <section className="about">
      <div className="about__content">
        <h2 className="about__content--heading">À PROPOS DE MOI</h2>
        <div className="about__content--divider divider-heading"></div>
        <p className="about__content--paragraph">
          Salut, je m’appelle Glad. J’habite à Montréal. Je suis intégrateur,
          développeur Web avec un fort intérêt pour le développement frontend.
          Après ma formation de développeur Web chez Openclassrooms à Paris.
          J’ai travaillé en tant que freelance en Guadeloupe. Je me suis occupé
          de créer des sites pour des petites entreprises et associations.
          Depuis mon arrivé au Québec je travaille en agence Web. Au quotidien
          mon rôle est de créer des sites WordPress de nos clients et
          d’optimiser le référencement des pages Webs. Ça va du site vitrine à
          des sites un peu plus complexes et des sites e-commerce. En parallèle,
          je continue à me perfectionner, à apprendre d’autres technologies,
          créer des projets personnels afin de de m’orienter de plus en plus
          vers le développement frontend pur.
        </p>
      </div>

      <div className="about__stack">
        <h2 className="about__stack--heading"> Stack</h2>
        <div className="about__stack--divider divider-heading"></div>
        <div className="about__stack--icons">
          <i className="fab fa-wordpress"></i>
          <i className="fab fa-html5"></i>
          <i className="fab fa-css3"></i>
          <i className="fab fa-sass"></i>
          <i className="fab fa-js"></i>
          <i className="fab fa-node"></i>
          <i className="fab fa-react"></i>
        </div>
      </div>
    </section>
  );
};

export default Apropos;
