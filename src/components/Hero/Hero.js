import React, { useEffect, useRef } from "react";
import { TweenMax, Power2 } from "gsap";
import Image from "../../assets/images/glad.jpg";
import { SocialMedia } from "../Nav/Links";

const Hero = () => {
  const titleAnimation = useRef(null);

  useEffect(() => {
    TweenMax.from(titleAnimation.current, 1, {
      y: -100,
      ease: Power2.easeOut,
    });
  }, [titleAnimation]);
  return (
    <header className="hero ">
      <div className="section-center hero-center bubbles">
        <article className="hero-info">
          <div className="underline"></div>
          <h1 ref={titleAnimation}>Gladston Aristoverne</h1>
          <h4>intégrateur, développeur frontend</h4>
          <a href="#contact" className="btn hero-btn">
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
          <img src={Image} className="hero-photo" alt="john doe" />
        </article>
      </div>
    </header>
  );
};

export default Hero;
