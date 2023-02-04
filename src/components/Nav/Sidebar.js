import React, { useState, useContext } from "react";
import { Links } from "./Links";
import Logo from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

import { AppContext } from "../../context/context";

const Sidebar = () => {
  //console.log(openSidebar, toggleMenu);

  return (
    <nav className="sidebar">
      <Link to="/" className="nav-logo">
        <img src={Logo} alt="nav logo" />
      </Link>
      <ul className="side-nav">
        {Links.map((link, index) => {
          return (
            <li key={index} className="item">
              <a href={link.link}>
                <span className="icon">{link.icon}</span>
                {link.name}
              </a>
            </li>
          );
        })}
      </ul>
      <div></div>
    </nav>
  );
};

export default Sidebar;