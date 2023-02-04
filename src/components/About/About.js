import React, { useContext } from "react";
import Image from "../../assets/images/about-img.jpg";

import { AppContext } from "../../context/context";

const Apropos = () => {
  const { togglePopup } = useContext(AppContext);
  return (
    <section id="a-propos" className="section about">
      <div className="section-center about-center">
        <article className="about-img">
          <img src={Image} className="hero-photo" alt="Gladston Aristoverne" />
        </article>

        <article className="about-info">
          <div className="section-title about-title">
            <h2>Qui-suis je ?</h2>
            <div className="underline"></div>
          </div>
          <p>
            Bienvenue sur mon site portfolio en tant que Développeur Web! Je
            suis passionné par le développement web et j'ai décidé de me
            concentrer sur ce domaine pour construire une carrière passionnante
            et stimulante.
          </p>
          <p>
            Mon objectif est de développer des sites web modernes, fonctionnels
            et attractifs pour les entreprises et les utilisateurs. Je suis
            formé en développement web, avec une solide connaissance des
            technologies frontend telles que HTML, CSS, JavaScript et React. Je
            suis également en train de m'initier à React Native pour développer
            mes compétences en développement mobile.
            <br />
            Sur ce site, vous pourrez découvrir mes projets personnels et
            professionnels, ainsi que mes compétences et mon parcours. Je suis
            convaincu que je peux apporter une valeur ajoutée à votre entreprise
            grâce à mes compétences techniques et à ma passion pour le
            développement web.
          </p>
          <p>
            N'hésitez pas à me contacter pour tout projet ou opportunité de
            collaboration. Je suis impatient de vous aider à développer votre
            site web et de construire une relation durable avec vous.
          </p>

          <button className="btn" onClick={togglePopup}>
            Mon Parcours
          </button>
        </article>
      </div>
    </section>
  );
};

export default Apropos;
