import React from "react";

import { SocialMedia } from "../Nav/Links";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <ul className="social-icons">
          {SocialMedia.map((link, index) => {
            return (
              <li key={index}>
                <a href={link.url} className={link.class}>
                  {link.icon}
                </a>
              </li>
            );
          })}
        </ul>

        <p>&copy;Gladston Aristoverne - Tous droits révervés</p>
      </footer>
    </div>
  );
};

export default Footer;
