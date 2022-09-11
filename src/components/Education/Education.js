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
              <p>2019 - 2020</p>
              <p>Paris</p>
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
              <p>2017</p>
              <p>Guyane, France</p>
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
            <p>Intégrer du contenu Web conformément à une maquette.</p>
          </li>
          <li className="item">
            <p>Création/refonte de site multipages/ e-commerce.</p>
          </li>
          <li className="item">
            <p>Implémenter des interfaces responsives.</p>
          </li>
          <li className="item">
            <p> Développement d’application Frontal sur mesure.</p>
          </li>
          <li className="item">
            <p>Optimiser le référencement naturel d'un site web.</p>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
