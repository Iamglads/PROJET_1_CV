import React, { useState, useEffect } from "react";
import data from "../../portfolio";
import Card from "./Card/Card";
import "./Realisations.scss";

const Realisations = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const response = await fetch(data);
      const projectsFetch = await response.json();

      setProjects(projectsFetch);
    } catch (error) {
      console.log(error.message);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    setProjects(data);
    //fetchProjects();
  }, []);

  return (
    <section className="achievements">
      <h2> RÉALISATIONS</h2>
      <div className="achievements__divider divider-heading"></div>
      <p className="achievements__note">
        Mes réalisation en agence sur demande.
      </p>
      <ul className="achievements__filter">
        {projects.map((projects, index) => {
          let langagesArr = [];
          langagesArr.push(...langagesArr, projects.langages);
          console.log(langagesArr);
          return <li key={index}></li>;
        })}
      </ul>
      <ul className="achievements__list">
        {projects.map((projects, index) => {
          return <Card data={projects} key={index} />;
        })}
      </ul>
    </section>
  );
};

export default Realisations;
