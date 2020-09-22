import React from "react";
import ZoomOutMapIcon from "@material-ui/icons/ZoomOutMap";
import VideoCallIcon from "@material-ui/icons/VideoCall";
import CreateOutlinedIcon from "@material-ui/icons/CreateOutlined";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { NavLink } from "react-router-dom";
import "./ButtonMessangerMenuWrapper.css";

const ButtonMessangerMenuWrapper = (props) => {
  return (
    <div
      className={"button__messanger__menu__wrapper"}
      style={
        props.activeButton
          ? { opacity: 1, visibility: "visible" }
          : { opacity: 0, visibility: "hidden" }
      }
    >
      <div className="button__messanger__menu__header">
        <h1>Messanger</h1>
        <div className="menu__header__panel">
          <div className="menu__header__button__messanger">
            <ZoomOutMapIcon />
          </div>

          <div className="menu__header__button__messanger">
            <VideoCallIcon />
          </div>

          <div className="menu__header__button__messanger">
            <CreateOutlinedIcon />
          </div>

          <div className="menu__header__button__messanger">
            <MoreHorizIcon />
          </div>
        </div>
      </div>
      <div className="button__create__menu__body">
        <input></input>
        <NavLink to={"/messages"}>See All in Messanger</NavLink>
      </div>
    </div>
  );
};

export default ButtonMessangerMenuWrapper;
