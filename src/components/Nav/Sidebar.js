import React, { useState, useContext } from "react";
import { Links } from "./Links";

import { AppContext } from "../../context/context";

const Sidebar = () => {
  //console.log(openSidebar, toggleMenu);
  const { openSidebar, toggleMenu } = useContext(AppContext);

  return (
    <nav className={openSidebar ? "sidebar active" : "sidebar"}>
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
    </nav>
  );
};

export default Sidebar;