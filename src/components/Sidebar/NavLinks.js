import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../../context/context";

const NavLinks = ({ item }) => {
  const { name, link, icon } = item;

  const { openSidebar, toggleMenu } = useContext(AppContext);

  return (
    <>
      <li className="side-nav__item">
        <Link to={link} className="side-nav__link" onClick={toggleMenu}>
          {icon}
          <span>{name}</span>
        </Link>
      </li>
    </>
  );
};

export default NavLinks;
