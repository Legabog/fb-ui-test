import React from "react";
import CloseOutlinedIcon from "@material-ui/icons/CloseOutlined";
import { IconButton } from "@material-ui/core";
import "./ProfileSelectAvatarBackgroundHeader.css";

const ProfileSelectAvatarBackgroundHeader = (props) => {
  return (
    <>
      <div className={"prifleSelectAvatarBackground__header"}>
        <div className={"prifleSelectAvatarBackground__header__title"}>
          <span>Select Photo</span>
        </div>
        <div className={"prifleSelectAvatarBackground__header__closeIcon"}>
          <IconButton
            onClick={() => {
              props.toggleProfileSelectAvatarBackground(
                props.profileSelectVisibility,
                props.profileSelectOpacity
              );
            }}
          >
            <CloseOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </>
  );
};

export default ProfileSelectAvatarBackgroundHeader;
