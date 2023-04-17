import React, { useState, useEffect } from "react";

const Filter = ({ projects, onFilter }) => {
  const [languages, setLanguages] = useState([]);

  useEffect(() => {
    const uniqueLanguages = Array.from(
      new Set(projects.flatMap((project) => project.langages))
    );
    setLanguages(uniqueLanguages);
  }, [projects]);

  return (
    <div className="section-center filter">
      {languages.map((language, index) => (
        <button className="btn" key={index} onClick={() => onFilter(language)}>
          {language}
        </button>
      ))}
    </div>
  );
};

export default Filter;
