import React from "react";
import Image from "../../assets/images/glad.jpg";
import { SocialMedia } from "../Nav/Links";

const Hero = () => {
  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div className="underline"></div>
          <h1>Gladston Aristoverne</h1>
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
