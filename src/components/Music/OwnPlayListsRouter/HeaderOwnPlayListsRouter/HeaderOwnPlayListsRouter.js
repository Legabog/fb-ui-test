import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./HeaderOwnPlayListsRouter.css"

import { NavLink } from "react-router-dom";
import { useState } from "react";

const HeaderOwnPlayListsRouter = (props) => {
  const [hover, toggleHover] = useState(0);

  const setHover = (e) => {
    toggleHover(e);
  };

  return (
    <div className={"headerArtistItemRouter"}>
      <NavLink
        to="/music-list/playlists/"
        onMouseOver={() => {
          setHover(1);
        }}
        onMouseOut={() => {
          setHover(0);
        }}
      >
        <div className={"headerArtistItemRouter__buttonBack"}>
        {hover ? (
            <ArrowBackIosIcon style={{ color: "#F62A54" }} />
          ) : (
            <ArrowBackIosIcon style={{ color: "#1877F2" }} />
          )}
          <h3>Playlists</h3>
        </div>
      </NavLink>
    </div>
  );
};

export default HeaderOwnPlayListsRouter;
