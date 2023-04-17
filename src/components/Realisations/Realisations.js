// src/components/Realisations/Realisations.js
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
      {/* ... */}
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
