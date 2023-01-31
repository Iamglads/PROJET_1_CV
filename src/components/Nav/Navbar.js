import React, { useState, useContext } from "react";
import { Links } from "./Links";
import Logo from "../../assets/images/logo.svg";

import { AppContext } from "../../context/context";

const Navbar = () => {
  //console.log(openSidebar, toggleMenu);
  const { openSidebar, toggleMenu } = useContext(AppContext);

  return (
    <>
      <nav className="nav" id="nav">
        <div className="nav-center">
          <div className="nav-header">
            <img src={Logo} className="nav-logo" alt="nav logo" />
          </div>
          <ul className="nav-links">
            {Links.map((link, index) => {
              return (
                <li key={index}>
                  <a href={link.link}>{link.name}</a>
                </li>
              );
            })}
          </ul>
          <div className="open-sidebar">Menu</div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
