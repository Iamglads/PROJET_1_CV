import React, { useContext, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/context";

const NavLinks = ({ item }) => {
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const { name, link, icon } = item;

  const { openSidebar, toggleMenu } = useContext(AppContext);

  const toggleMenuTablet = () => {
    if (screenWidth < 820) {
      console.log(screenWidth);
      toggleMenu();
    }
  };

  return (
    <>
      <li className="side-nav__item">
        <Link to={link} className="side-nav__link" onClick={toggleMenuTablet}>
          {icon}
          <span>{name}</span>
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
