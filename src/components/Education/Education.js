import React from "react";

const Education = () => {
  return (
    <section className="education">
      <h2 className="education__heading">
        <i className="fas fa-award"></i> FORMATION
      </h2>
      <div className="education__divider"></div>
      <ul>
        <li className="educationLeft">
          <span className="icon">
            <i className="far fa-dot-circle"></i>
          </span>
          <div>
            <p className="p">2019 - 2020</p>
            <p className="p">Paris</p>
          </div>
        </li>
        <li className="educationRight">
          <h3>OPENclassNameROOMS</h3>
          <h4>Développeur web</h4>
          <p>
            {" "}
            J'ai suivi le parcours de développeur web junior. J'ai développé mes
            compétences en intégration et en programmation web. Je me
            perfectionne en Javascript et son Framework
            <a href="https://vuejs.org/">Vue</a>
          </p>
        </li>
      </ul>
      <ul>
        <li className="educationLeft">
          <span className="icon">
            <i className="fas fa-circle"></i>
          </span>
          <div>
            <p className="p">2016 - 2017</p>
            <p className="p"> Guyane</p>
          </div>
        </li>
        <li className="educationRight">
          <h3>UNIVERSITE DES ANTILLES - GUYANE</h3>
          <h4>Licence Administration Economique et Sociale</h4>
          <p>Micro Economie - Macro Economie - Entreprenariat</p>
        </li>
      </ul>
      <ul>
        <li className="educationLeft">
          <span className="icon">
            <i className="fas fa-circle"></i>
          </span>
          <div>
            <p className="p">2013 - 2015</p>
            <p className="p"> Guyane</p>
          </div>
        </li>
        <li className="educationRight">
          <h3>IUT DE KOUROU - GUYANE</h3>
          <h4>Techniques de commercialisation</h4>
          <p>
            Durant ce cursus, j'ai développé des compétences dans le marketing
            digital, la prospection et la commercialisation en B to B et la
            négociation.
          </p>
        </li>
      </ul>
    </section>
  );
};

export default Education;
