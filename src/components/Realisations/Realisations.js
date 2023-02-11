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
    <section id="realisations" className="section achievements">
      <div className="section-title">
        <h2>Dernières réalisations</h2>
        <div className="underline"></div>
        <p className="projects-text">Mes réalisations en agence sur demande.</p>
      </div>

      <div className="section-center projects-center">
        {projects.map((projects, index) => {
          return <Card data={projects} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Realisations;
