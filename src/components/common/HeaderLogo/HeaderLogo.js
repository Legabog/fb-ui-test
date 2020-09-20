import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import { NavLink } from "react-router-dom";
import "./HeaderLogo.css";

const HeaderLogo = (props) => {
  return (
    <div className="headerLogo">
      <NavLink ink to={"/"}>
        <div className="header__logo">
          <GitHubIcon />
          <h4>Legabog</h4>
        </div>
      </NavLink>
    </div>
  );
};

export default HeaderLogo;
