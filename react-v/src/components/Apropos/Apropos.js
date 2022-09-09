import React from "react";

const Apropos = () => {
  return (
    <div>
      <section className="blockLeft">
        <div className="blockLeft__img">
          <img src="." alt="Gladston Aristoverne" />
        </div>
        <h2 className="blockLeft__heading">Contact</h2>
        <ul>
          <li>
            <a href="https://www.linkedin.com/in/gladston-developpeur-web/">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/Iamglads">
              <i className="fab fa-github"></i>
            </a>
          </li>
        </ul>
        <h2 className="blockLeft__heading"> Qui suis-je ?</h2>
        <div className="blockLeft__paragraph">
          <p>
            {" "}
            Hello, je m’appelle Gladston, j’ai 25 ans et je vis en Guadeloupe.
            Je me forme au métier de développeur web. C’est une passion
            découverte durant ma période en entreprise. J’ai voulu mettre en
            place un site web afin de placer mon entreprise au coeur d’une
            stratégie digital. J’ai pris goût durant ce challenge personnel,
            j’ai décidé d’en faire mon métier. J’aime apprendre de nouvelles
            choses que ce soit apprendre à réparer une machine à laver ou
            apprendre un nouveau langage web, je prends le même plaisir.
          </p>
        </div>

        <h2 className="blockLeft__heading"> Stack</h2>

        <div className="blockLeft__hobbies">
          <i className="fab fa-wordpress"></i>
          <i className="fab fa-html5"></i>
          <i className="fab fa-css3"></i>
          <i className="fab fa-sass"></i>
          <i className="fab fa-js"></i>
          <i className="fab fa-node"></i>
          <i className="fab fa-react"></i>
        </div>
      </section>
    </div>
  );
};

export default Apropos;
