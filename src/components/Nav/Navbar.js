import React, { useState, useEffect, useContext } from "react";
import { Links } from "./Links";
import Logo from "../../assets/images/logo.svg";

import { AppContext } from "../../context/context";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isStiky, setStiky] = useState(false);
  const { toggleSidebar } = useContext(AppContext);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 150) {
        setStiky(true);
      } else {
        setStiky(false);
      }
    });
  });

  return (
    <>
      <nav
        className="nav"
        id="nav"
        style={{
          position: isStiky && "fixed",
          zIndex: 1,
          backgroundColor: isStiky && "rgba(0, 0, 0, .5)",
        }}
      >
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
