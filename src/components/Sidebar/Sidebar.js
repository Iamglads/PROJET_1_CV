import React, { useState, useContext } from "react";
import { ImAccessibility } from "react-icons/im";
import { FaLinkedin } from "react-icons/fa";

import {
  VscTools,
  VscBriefcase,
  VscMortarBoard,
  VscGithubInverted,
} from "react-icons/vsc";
import { FiMail } from "react-icons/fi";
import { GrLocationPin } from "react-icons/gr";
import { Link } from "react-router-dom";
import Image from "../../assets/images/glad.jpg";

import { AppContext } from "../../context/context";

const Sidebar = () => {
  //console.log(openSidebar, toggleMenu);
  const { openSidebar, toggleMenu } = useContext(AppContext);

  return (
    <>
      <nav className={openSidebar ? "sidebar active" : "sidebar"}>
        <div className="infobox">
          <img src={Image} alt="Gladston Aristoverne" />
          <h1 className="infobox__name">Gladston Aristoverne</h1>
        </div>
        <ul className="side-nav">
          <li className="side-nav__item">
            <Link to="/" className="side-nav__link">
              <ImAccessibility className="icon" />
              <span>Qui suis-je ?</span>
            </Link>
          </li>
          <li className="side-nav__item">
            <Link to="/experiences" className="side-nav__link">
              <VscBriefcase className="icon" />
              <span>Experiences</span>
            </Link>
          </li>
          <li className="side-nav__item">
            <Link to="/education" className="side-nav__link">
              <VscMortarBoard className="icon" />
              <span>Formation</span>
            </Link>
          </li>
          <li className="side-nav__item">
            <Link to="/realisations" className="side-nav__link">
              <VscTools className="icon" />
              <span>Réalisations</span>
            </Link>
          </li>
          <li className="side-nav__item">
            <Link to="/contact" className="side-nav__link">
              <FiMail className="icon" />
              <span>Contact</span>
            </Link>
          </li>
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
      </nav>
    </>
  );
};

export default Sidebar;
