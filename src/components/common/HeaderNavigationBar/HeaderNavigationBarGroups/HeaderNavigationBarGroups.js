import React from "react";
import SupervisedUserCircleIcon from "@material-ui/icons/SupervisedUserCircle";
import "./HeaderNavigationBarGroups.css";
import { NavLink } from "react-router-dom";

const HeaderNavigationBarGroups = (props) => {
  return (
    <div
      className={
        props.activeLink === "/groups"
          ? "header__option__groups__active"
          : "header__option__groups"
      }
      onClick={() => {
        props.toggleActiveLink("/groups");
      }}
      onMouseEnter={props.toggleHelp}
      onMouseLeave={props.toggleHelp}
    >
      <div
        className={
          props.activeLink === "/groups"
            ? "header__option__groups__wrapper__active"
            : "header__option__groups__wrapper"
        }
      >
        <SupervisedUserCircleIcon fontSize="large" />
      </div>
    </div>
  );
};

export default HeaderNavigationBarGroups;
