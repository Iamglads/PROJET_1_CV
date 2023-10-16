import React, { useEffect, useRef } from "react";
import WOW from "wowjs";
import "animate.css/animate.min.css";

import Image from "../../assets/images/glad.jpg";
import { SocialMedia } from "../Nav/Links";

const Hero = () => {
  const myElementRef1 = useRef(null);
  const myElementRef2 = useRef(null);
  const myElementRef3 = useRef(null);

  useEffect(() => {
    const wow = new WOW.WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: false,
      live: true,
    });

    myElementRef1.current && wow.init();
    myElementRef2.current && wow.init();
    myElementRef3.current && wow.init();
  }, []);
  return (
    <header className="hero ">
      <div className="section-center hero-center bubbles">
        <article className="hero-info">
          <div className="underline"></div>
          <h1
            ref={myElementRef1}
            className="wow animate__animated animate__fadeInUp"
            data-wow-delay=".2s"
          >
            Gladston Aristoverne
          </h1>
          <h4
            ref={myElementRef2}
            className="wow animate__animated animate__fadeInUp"
            data-wow-delay=".4s"
          >
            Développeur frontend React/NextJs
          </h4>
          <a
            href="#contact"
            ref={myElementRef3}
            className="btn hero-btn wow animate__animated animate__fadeInUp"
            data-wow-delay=".10s"
          >
            Contactez-moi!
          </a>
          {/*   social icons */}
          <ul className="social-icons hero-icons">
            {SocialMedia.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.url} className={link.className}>
                    {link.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </article>
        <article className="hero-img">
          <img src={Image} className="hero-photo" alt="Gladston Aristoverne" />
        </article>
      </div>
    </header>
  );
};

export default Hero;
