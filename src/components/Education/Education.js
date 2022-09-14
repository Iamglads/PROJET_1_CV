import React from "react";

const Education = () => {
  return (
    <section className="education">
      <h2 className="education__heading">FORMATION</h2>
      <div className="education__divider divider-heading"></div>
      <div className="education__formation">
        <ul>
          <li className="item">
            <div>
              <p>Paris, 2019 - 2020</p>
            </div>
          </li>
          <li className="item">
            <h3>Openclassrooms</h3>
            <h4>Développeur web</h4>
          </li>
        </ul>
        <ul>
          <li className="item">
            <div>
              <p>Guyane, France - 2017</p>
            </div>
          </li>
          <li className="item">
            <h3>Université de Guyane</h3>
            <h4>Licence Administration Économique & Sociale</h4>
          </li>
        </ul>
      </div>
      <div className="education__skills">
        <h2 className="education__heading">COMPÉTENCES</h2>
        <div className="education__divider divider-heading"></div>

        <ul>
          <li className="item">
            Intégrer du contenu conformément à une maquette (HTML, CSS, Sass,
            Tailwind).
          </li>
          <li className="item">
            Création de sites onepage, multipages WordPress / E-commerce
            (Woocommerce).
          </li>
          <li className="item">Créer des animations CSS.</li>
          <li className="item">
            Maitrise Elementor Builder/Oxygen Builder, testé le builder
            Breakdance dans sa version beta.
          </li>
          <li className="item">
            Utilisation d'ACF, Pods, Gravity Form, Woocommerce subscription ...
          </li>
          <li className="item">
            Implémenter des interfaces Responsives. Optimiser le référencement
          </li>
          <li className="item">
            Optimiser le référencement naturel des pages Web.
          </li>
          <li className="item">
            Développement d’application Javascript/React.
          </li>
          <li className="item">Versionner mon code avec Git.</li>
          <li className="item">Gestion de projet Web.</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
