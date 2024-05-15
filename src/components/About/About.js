import React, { useEffect, useRef, useContext } from "react";
import WOW from "wowjs";
import "animate.css/animate.min.css";
import Image from "../../assets/images/about-img.jpg";
import { AppContext } from "../../context/context";

const Apropos = () => {
  const elementsRefs = useRef([]);
  const { togglePopup } = useContext(AppContext);

  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });
    wow.init();
  }, []);

  return (
    <section id="a-propos" className="section about">
      <div className="section-center about-center">
        <article className="about-img">
          <img src={Image} className="hero-photo" alt="Gladston Aristoverne" />
        </article>
        <article className="about-info">
          <div className="section-title about-title">
            <h2
              ref={(el) => elementsRefs.current[0] = el}
              className="wow animate__animated animate__fadeInUp"
              data-wow-delay=".2s"
            >
              Qui-suis je ?
            </h2>
            <div className="underline"></div>
          </div>
          <p
            ref={(el) => elementsRefs.current[1] = el}
            className="wow animate__animated animate__fadeInUp"
            data-wow-delay=".4s"
          >
            Bienvenue sur mon portfolio ! Je suis développeur web passionné, spécialisé dans la création de sites modernes et fonctionnels.
          </p>
          <p
            ref={(el) => elementsRefs.current[2] = el}
            className="wow animate__animated animate__fadeInUp"
            data-wow-delay=".6s"
          >
            Mon expertise inclut HTML, CSS, JavaScript, et React. Je m'initie également à React Native pour le développement mobile.
          </p>
          <p
            ref={(el) => elementsRefs.current[3] = el}
            className="wow animate__animated animate__fadeInUp"
            data-wow-delay=".8s"
          >
            Découvrez mes projets et compétences sur ce site. Je suis prêt à apporter une valeur ajoutée à votre entreprise grâce à mes connaissances techniques.
          </p>
          <p
            ref={(el) => elementsRefs.current[4] = el}
            className="wow animate__animated animate__fadeInUp"
            data-wow-delay=".9s"
          >
            Contactez-moi pour toute collaboration. Je suis enthousiaste à l'idée de développer votre site web et de bâtir une relation durable.
          </p>
          <a className="btn" href="#contact">
            Contactez-moi
          </a>
        </article>
      </div>
    </section>
  );
};

export default Apropos;
