import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div className="header">
      <nav>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" to="/services">
          Services
        </NavLink>
        <NavLink activeClassName="active" to="/examination">
          Examination
        </NavLink>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
      </nav>
    </div>
  );
};

export default Header;
