import React from "react";
import Image from "../../assets/images/glad.jpg";
import { SocialMedia } from "../Nav/Links";

const Hero = () => {
  return (
    <header class="hero">
      <div class="section-center hero-center">
        <article class="hero-info">
          <div class="underline"></div>
          <h1>Gladston Aristoverne</h1>
          <h4>intégrateur, développeur frontend</h4>
          <a href="#contact" class="btn hero-btn">
            Contactez-moi!
          </a>
          {/*   social icons */}
          <ul class="social-icons hero-icons">
            {SocialMedia.map((link) => {
              return (
                <li>
                  <a href={link.url} className={link.class}>
                    {link.icon}
                  </a>
                </li>
              );
            })}
          </ul>
        </article>
        <article class="hero-img">
          <img src={Image} class="hero-photo" alt="john doe" />
        </article>
      </div>
    </header>
  );
};

export default Hero;
