import React from "react";

import { SocialMedia } from "../Sidebar/Links";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <ul className="social-icons">
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

        <p>
          &copy; Gladston Aristoverne | Design by{" "}
          <a href="https://www.johnsmilga.com/" target="_blank">
            Codingaddict
          </a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
