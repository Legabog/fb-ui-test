import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./ButtonAccountWrapper.css";
import { Avatar } from "@material-ui/core";

const ButtonAccountWrapper = (props) => {
  return (
    <div className={"button__account__wrapper"}>
      <div
        className={
          props.activeButton === 3
            ? "button__account__active"
            : "button__account"
        }
        onClick={() => {
          props.activeButton === 3
            ? props.toggleActiveButton()
            : props.toggleActiveButton(3);
          props.toggleAccountHelp(false);
        }}
        onMouseEnter={() => {
          props.toggleAccountHelp(true);
        }}
        onMouseLeave={() => {
          props.toggleAccountHelp(false);
        }}
      >
        {props.user === null || props.user.Avatar === ""
          ? <AccountCircleIcon />
          : <Avatar src={props.user.Avatar} />
        }
      </div>
    </div>
  );
};

export default ButtonAccountWrapper;
