import React, { useContext } from "react";

import { AppContext } from "../../context/context";

const Education = () => {
  const { togglePopup } = useContext(AppContext);
  return (
    <section className="section timeline">
      <button className="close-timeline" onClick={togglePopup}></button>
      <div className="section-title">
        <h2>Mon Parcours</h2>
        <div className="underline"></div>
      </div>
      <div className="section-center timeline-center">
        <article className="timeline-item">
          <h4>2017</h4>
          <p>Licence Administration Économique et Sociale</p>
          <span className="number">1</span>
        </article>
        <article className="timeline-item">
          <h4>2020</h4>
          <p>Formation Développeur d'application Javascript/React</p>
          <span className="number">2</span>
        </article>
        <article className="timeline-item">
          <h4>2023</h4>
          <p>Google IT Support Specialist</p>
          <span className="number">3</span>
        </article>
      </div>
    </section>
  );
};

export default Education;
