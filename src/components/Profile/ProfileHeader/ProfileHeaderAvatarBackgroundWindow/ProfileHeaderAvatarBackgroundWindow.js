import React from "react";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import PublishIcon from "@material-ui/icons/Publish";
import "./ProfileHeaderAvatarBackgroundWindow.css";

const ProfileHeaderAvatarBackgroundWindow = (props) => {
  return (
    <div
      className={"profile__header__avatarBackground__window__wrapper"}
      style={{
        visibility: props.windowAvatarBackgroundVisibility,
        opacity: props.windowAvatarBackgroundOpacity,
      }}
    >
      <div className={"profile__header__avatarBackground__window"}>
        <div className={"profile__header__avatarBackground__windowSection"}>
          <PhotoLibraryIcon />
          <span>Select Photo</span>
        </div>

        <label htmlFor="avatarBackground-uploader">
          <div
            className={"profile__header__avatarBackground__windowSection"}
            onClick={props.toggleWindowAvatarBackground}
            
          >
            <PublishIcon />
            <span>Upload Photo</span>
          </div>
        </label>
      </div>
    </div>
  );
};

export default ProfileHeaderAvatarBackgroundWindow;
