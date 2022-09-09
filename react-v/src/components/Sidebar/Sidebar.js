import React from "react";
import { FaBeer } from "react-icons/fa";
import { Link } from "react-router-dom";
import Image from "../../assets/images/glad.jpg";
import "./Sidebar.scss";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <div className="infobox">
        <img src={Image} alt="Gladston Aristoverne" />
        <h1>Gladston Aristoverne</h1>
      </div>
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <Link to="/a-propos" className="side-nav__link">
            <FaBeer />
            <span>Qui suis-je ?</span>
          </Link>
        </li>
        <li className="side-nav__item side-nav__item--active">
          <Link to="/experiences" className="side-nav__link">
            <FaBeer />
            <span>Experiences</span>
          </Link>
        </li>
        <li className="side-nav__item side-nav__item--active">
          <Link to="/education" className="side-nav__link">
            <FaBeer />
            <span>Formation</span>
          </Link>
        </li>
        <li className="side-nav__item side-nav__item--active">
          <Link to="/realisations" className="side-nav__link">
            <FaBeer />
            <span>Réalisations</span>
          </Link>
        </li>
      </ul>

      <div className="legal">&copy; 2022 by me. Tous droits réservés.</div>
    </nav>
  );
};

export default Sidebar;
