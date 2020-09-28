import React from "react";
import "./ProfileBioActiveButtonSave.css";

const ProfileBioActiveButtonSave = (props) => {
  return (
    <div
      className={"profile__header__bio__activeButtonSave"}
    //   onClick={props.changeBioHandler(props.textAreaSymbols)}
    >
      <span>Save</span>
    </div>
  );
};

export default ProfileBioActiveButtonSave;
