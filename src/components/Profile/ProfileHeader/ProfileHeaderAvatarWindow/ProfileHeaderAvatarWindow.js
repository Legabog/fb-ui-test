import React from "react";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import "./ProfileHeaderAvatarWindow.css";

const ProfileHeaderAvatarWindow = (props) => {
  return (
    <div className={"profile__header__avatar__window__wrapper"}>
        <div
          className={"profile__header__avatar__window"}
          style={{
            visibility: props.windowAvatarVisibility,
            opacity: props.windowAvatarOpacity,
          }}
        >
          <div className={"profile__header__avatar__windowSection"}>
            <AccountBoxIcon />
            <span>View Profile Picture</span>
          </div>

          <div className={"profile__header__avatar__windowSection"}>
            <PhotoLibraryIcon />
            <span>View Profile Picture</span>
          </div>
        </div>
      </div>
  );
};

export default ProfileHeaderAvatarWindow;