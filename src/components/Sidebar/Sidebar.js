import React, { useState, useContext } from "react";
import { Links } from "./Links";
import NavLinks from "./NavLinks";
import { FaLinkedin } from "react-icons/fa";
import { VscGithubInverted } from "react-icons/vsc";
import Image from "../../assets/images/glad.jpg";

import { AppContext } from "../../context/context";

const Sidebar = () => {
  //console.log(openSidebar, toggleMenu);
  const { openSidebar, toggleMenu } = useContext(AppContext);

  return (
    <>
      <nav className={openSidebar ? "sidebar active" : "sidebar"}>
        <div className="sidebar__wrappe">
          <div className="infobox">
            <img src={Image} alt="Gladston Aristoverne" />
            <h1 className="infobox__name">
              Gladston
              <br /> Aristoverne
            </h1>
          </div>
          <ul className="side-nav">
            {Links.map((link, index) => {
              return <NavLinks key={index} item={link} />;
            })}
          </ul>

          <footer className="legal">
            <ul className="infobox__socialmedia">
              <li>
                <a
                  href="https://www.linkedin.com/in/gladston-aristoverne/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="icon" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Iamglads"
                  target="_blank"
                  rel="noreferrer"
                >
                  <VscGithubInverted className="icon" />
                </a>
              </li>
            </ul>
            <p>&copy; 2022 by me. Tous droits réservés.</p>
          </footer>
        </div>
      </nav>
    </>
  );
};

export default Sidebar;