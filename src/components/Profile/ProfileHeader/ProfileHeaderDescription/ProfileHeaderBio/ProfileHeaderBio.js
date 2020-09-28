import React from "react";
import "./ProfileHeaderBio.css";

const ProfileHeaderBio = (props) => {
  return (
    <div className={"profile__header__bio"}>
      {props.user === null || props.user.Bio === "" ? (
        <span onClick={props.toggleClickState}>Add Bio</span>
      ) : (
        <>
          <span>{props.user.Bio}</span>
          <br />
          <span onClick={props.toggleClickState}>Edit</span>
        </>
      )}
    </div>
  );
};

export default ProfileHeaderBio;
