import React, { useState } from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import HomeIcon from "@material-ui/icons/Home";
import "./HeaderNavigationBarHome.css";
import { NavLink } from "react-router-dom";

const HeaderNavigationBarHome = (props) => {
  const [clicked, setClicked] = useState(false);

  const toggleClick = () => {
    setClicked(true);
  };

  return (
    <div
      className={
        props.activeLink === "/"
          ? "header__option__home__active"
          : "header__option__home"
      }
      onClick={() => {
        props.toggleActiveLink("/");
        if (clicked === false) {
          toggleClick();
          props.toggleHelpHome();
        }
      }}
      onMouseEnter={props.toggleHelpHome}
      onMouseLeave={props.toggleHelpHome}
    >
      <div
        className={
          props.activeLink === "/"
            ? "header__option__home__wrapper__active"
            : "header__option__home__wrapper"
        }
      >
        {props.activeLink ? (
          <HomeIcon fontSize="large" />
        ) : (
          <HomeOutlinedIcon fontSize="large" />
        )}
      </div>
    </div>
  );
};

export default HeaderNavigationBarHome;
