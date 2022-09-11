import React from "react";
import "./Apropos.scss";

const Apropos = () => {
  return (
    <section className="about">
      <div className="about__content">
        <h2 className="about__content--heading">Qui suis-je ?</h2>
        <div className="about__content--divider divider-heading"></div>
        <p className="about__content--paragraph">
          Hello, je m’appelle Gladston, j’ai 25 ans et je vis en Guadeloupe. Je
          me forme au métier de développeur web. C’est une passion découverte
          durant ma période en entreprise. J’ai voulu mettre en place un site
          web afin de placer mon entreprise au coeur d’une stratégie digital.
          J’ai pris goût durant ce challenge personnel, j’ai décidé d’en faire
          mon métier. J’aime apprendre de nouvelles choses que ce soit apprendre
          à réparer une machine à laver ou apprendre un nouveau langage web, je
          prends le même plaisir.
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
