import React from "react";
import musicCover from "../../../utils/assets/apple theme/music.jpg";

const OpenPlayerPanelDescription = (props) => {
  return (
    <React.Fragment>
      <img
        src={
          props.activeTrack !== null ? props.activeTrack.albumCover : musicCover
        }
        alt={musicCover}
        onClick={props.toggleMusicPanel}
      />
      <h2 onClick={props.toggleMusicPanel}>
        {props.activeTrack !== null ? props.activeTrack.title : "Not Playing"}
      </h2>
    </React.Fragment>
  );
};

export default OpenPlayerPanelDescription;
