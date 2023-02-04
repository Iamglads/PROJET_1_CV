import React, { useState, useContext } from "react";
import { Links } from "./Links";
import Logo from "../../assets/images/logo.svg";

import { AppContext } from "../../context/context";
import { Link } from "react-router-dom";

const Navbar = () => {
  //console.log(openSidebar, toggleMenu);
  const { toggleSidebar } = useContext(AppContext);

  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-center">
          <Link to="/" className="nav-logo">
            <img src={Logo} alt="nav logo" />
          </Link>
          <ul className="nav-links">
            {Links.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.link}>{link.name}</a>
                </li>
              );
            })}
          </ul>
          <div className="menu-burger" onClick={toggleSidebar}>
            <span className="icon"></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
