import React from "react";
import PublicIcon from "@material-ui/icons/Public";
import "./ProfileHeaderConfirmChangeAvatarBackground.css";

const ProfileHeaderConfirmChangeAvatarBackground = (props) => {
  return (
    <div
      className={"confirmChangeAvatarBackground__wrapper"}
      style={{
        visibility: `${props.windowConfirmBackgroundVisibility}`,
        opacity: `${props.windowConfirmBackgroundOpacity}`,
      }}
    >
      <div className={"confirmChangeAvatarBackground"}>
        <div className={"confirmChangeAvatarBackground__description"}>
          <PublicIcon />
          <span>Your cover photo is public</span>
        </div>

        <div className={"confirmChangeAvatarBackground__controlPanel"}>
          {props.fetchAvatarBackground ? (
            <>
              <div
                className={
                  "confirmChangeAvatarBackground__controlPanel__cancelButton-disabled"
                }
              >
                <span>Cancel</span>
              </div>

              <div
                className={`confirmChangeAvatarBackground__controlPanel__saveButton-disabled`}
              >
                <span>Save Changes</span>
              </div>
            </>
          ) : (
            <>
              <div
                className={`confirmChangeAvatarBackground__controlPanel__cancelButton`}
                onClick={() => {
                  props.clearTempAvatarBackgroundHandler();
                  props.toggleWindowConfirmBackground(false);
                }}
              >
                <span>Cancel</span>
              </div>
              <div
                className={`confirmChangeAvatarBackground__controlPanel__saveButton`}
                onClick={() => {
                  props.changeAvatarBackgroundHandler(
                    props.profileUpdateTempAvatarBackground,
                    props.profileUpdateTempAvatarBackgroundName,
                    props.activeAccountEmail,
                    props.toggleWindowConfirmBackground
                  );
                }}
              >
                <span>Save Changes</span>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileHeaderConfirmChangeAvatarBackground;
