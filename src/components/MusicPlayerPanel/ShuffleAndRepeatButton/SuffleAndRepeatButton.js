import React from "react";
import "../MusicPlayerPanel.css";
import ShuffleIcon from "@material-ui/icons/Shuffle";

const ShuffleAndRepeatButton = (props) => {
  return (
    <React.Fragment>
      <div className={"MusicPlayerPanel__open__shuffleAndRepeat"}>
        <button
          disabled={props.activeTrack !== null ? false : true}
          style={{ marginLeft: "513px" }}
          onClick={props.setRepeatState}
        >
          {props.repeatState === 0 ? (
            <ShuffleIcon style={{ color: "gray" }} />
          ) : props.repeatState === 1 ? (
            <ShuffleIcon style={{ color: "green" }} />
          ) : (
            <ShuffleIcon style={{ color: "red" }} />
          )}
        </button>
      </div>
    </React.Fragment>
  );
};

export default ShuffleAndRepeatButton;
