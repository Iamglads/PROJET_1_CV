import React from "react";
import "./Experiences.scss";

const Experiences = () => {
  return (
    <section className="experiences">
      <h2 className="experiences__heading">EXPERIENCES</h2>
      <div className="experiences__divider divider-heading"></div>
      <div className="experiences__formation">
        <li className="item">
          <p>2019 - 2020</p>
          <p>Paris</p>
        </li>
        <li className="item">
          <h3>Openclassrooms</h3>
          <h4>Développeur web</h4>
          <p>
            J'ai suivi le parcours de développeur web junior. J'ai développé mes
            compétences en intégration et en programmation web. Je me
            perfectionne en Javascript et son Framework
            <a href="https://vuejs.org/">Vue</a>
          </p>
        </li>
      </div>
    </section>
  );
};

export default Experiences;
