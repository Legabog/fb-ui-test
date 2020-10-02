import React, { useState } from "react";
import "./ProfileSelectAvatarBackgroundBody.css";

const ProfileSelectAvatarBackgroundBody = (props) => {
  const [navigationState, setNavigationState] = useState(0);

  return (
    <div className={"prifleSelectAvatarBackground__body"}>
      <div className={"prifleSelectAvatarBackground__body__navigation"}>
        <div
          className={
            navigationState === 0
              ? "prifleSelectAvatarBackground__selector-active"
              : "prifleSelectAvatarBackground__selector"
          }
          onClick={() => {
            setNavigationState(0);
          }}
        >
          <span>Recent Photos</span>
        </div>

        <div
          className={
            navigationState === 1
              ? "prifleSelectAvatarBackground__selector-active"
              : "prifleSelectAvatarBackground__selector"
          }
          onClick={() => {
            setNavigationState(1);
          }}
        >
          <span>Photo Albums</span>
        </div>
      </div>

      {navigationState === 0 ? (
        <div
          className={
            "prifleSelectAvatarBackground__body__recentPhotos__wrapper"
          }
        >
          <div className={"prifleSelectAvatarBackground__body__recentPhotos"}>
            {props.user === null || props.user.Avatars.recentUploads === ""
              ? null
              : props.user.Avatars.recentUploads.map((e, index) => {
                  return (
                    <img
                      src={e}
                      alt="description"
                      key={index}
                      onClick={() => {
                        props.avatarBackgroundLoaderUrlHandler(e);
                        props.toggleWindowConfirmBackground(true);
                        props.toggleProfileSelectAvatarBackground(
                          props.profileSelectVisibility,
                          props.profileSelectOpacity
                        );
                      }}
                    />
                  );
                })}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default ProfileSelectAvatarBackgroundBody;
