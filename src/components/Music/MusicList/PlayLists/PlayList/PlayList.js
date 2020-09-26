import React from "react";
import "./PlayList.css";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const PlayList = (props) => {
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <>
      {props.playListSwitcher ? (
        <>
          <NavLink
            to={`/music-player/${props.tempTrack.author}/${props.tempTrack.albumTitle}`}
            onMouseOver={() => {
              setHover(1);
            }}
            onMouseOut={() => {
              setHover(0);
            }}
          >
            <div
              className={"playList"}
              onClick={() => {
                let i = 0;

                props.tracks.map((e) => {
                  if (
                    (e.title === props.tempTrack.title) &
                    (e.author === props.tempTrack.author)
                  ) {
                    i += 1;
                  }

                  return i;
                });

                if (i === 0) {
                  let payload = [...props.tracks, props.tempTrack];

                  props.updatePlaylist(props.id, {
                    tracks: payload,
                  });
                }
              }}
            >
              <img src={props.img} alt="description" />
              <div className={"playList__description"}>
                <h3>{props.name}</h3>
              </div>
              <div className={"playList__arrowRight"}>
                {hover ? (
                  <ArrowForwardIosIcon style={{ color: "#F62A54" }} />
                ) : (
                  <ArrowForwardIosIcon style={{ color: "#1877F2" }} />
                )}
              </div>
            </div>
          </NavLink>
        </>
      ) : (
        <NavLink
          to={`/music-playlists/${props.name}/`}
          onMouseOver={() => {
            setHover(1);
          }}
          onMouseOut={() => {
            setHover(0);
          }}
        >
          <div className={"playList"}>
            <img src={props.img} alt="description" />
            <div className={"playList__description"}>
              <h3>{props.name}</h3>
            </div>
            <div className={"playList__arrowRight"}>
              {hover ? (
                <ArrowForwardIosIcon style={{ color: "#F62A54" }} />
              ) : (
                <ArrowForwardIosIcon style={{ color: "#1877F2" }} />
              )}
            </div>
          </div>
        </NavLink>
      )}
    </>
  );
};

export default PlayList;
