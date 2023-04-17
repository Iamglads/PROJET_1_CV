import React, { useState, useEffect } from "react";
import data from "../../portfolio";
import Card from "./Card/Card";
import Filter from "./Filter";
import "./Realisations.scss";

const Realisations = () => {
  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);

  useEffect(() => {
    setProjects(data);
    setFilteredProjects(data);
  }, []);

  const filterProjects = (language) => {
    const filtered = projects.filter((project) =>
      project.langages.includes(language)
    );
    setFilteredProjects(filtered);
  };

  return (
    <section id="realisations" className="section achievements">
      <div className="section-title">
        <h2>Dernières réalisations</h2>
        <div className="underline"></div>
        <p className="projects-text">Mes réalisations en agence sur demande.</p>
      </div>
      <Filter projects={projects} onFilter={filterProjects} />
      <div className="section-center projects-center">
        {filteredProjects.map((project, index) => {
          return <Card data={project} key={index} />;
        })}
      </div>
    </section>
  );
};

export default Realisations;
