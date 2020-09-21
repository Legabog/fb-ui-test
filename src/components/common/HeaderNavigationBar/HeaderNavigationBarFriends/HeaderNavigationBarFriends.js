import React from "react";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import "./HeaderNavigationBarFriends.css";
import { NavLink } from "react-router-dom";

const HeaderNavigationBarFriends = (props) => {
  return (
    <div
      className={
        props.activeLink === "/friends"
          ? "header__option__friends__active"
          : "header__option__friends"
      }
      onClick={() => {
        props.toggleActiveLink("/friends");
      }}
      onMouseEnter={props.toggleHelp}
      onMouseLeave={props.toggleHelp}
    >
      <div
        className={
          props.activeLink === "/friends"
            ? "header__option__friends__wrapper__active"
            : "header__option__friends__wrapper"
        }
      >
        <SupervisorAccountIcon fontSize="large" />
      </div>
    </div>
  );
};

export default HeaderNavigationBarFriends;
