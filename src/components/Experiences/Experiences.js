import React from "react";
import "./Experiences.scss";

const Experiences = () => {
  return (
    <section className="experiences">
      <h2 className="experiences__heading">EXPERIENCES</h2>
      <div className="experiences__divider divider-heading"></div>
      <div className="experiences__formation">
        <li className="item">
          <p>juillet 2021 - Ajourd'hui </p>
          <h3>AMM - Saint-hubert, QC</h3>
          <h4>Intégrateur Web</h4>
        </li>
        <li className="item">
          <p>Octobre 2020 - Juin 2021 </p>
          <h3>Freelance - Guadeloupe, France</h3>
          <h4>Webmaster</h4>
        </li>
      </div>
    </section>
  );
};

export default Experiences;
