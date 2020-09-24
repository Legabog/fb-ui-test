import React from "react";
import "./BodyAlbums.css"

import AlbumItem from "../AlbumItem/AlbumItem.js";

const BodyAlbums = (props) => {
  return (
    <div className={"bodyAlbumsList"}>
      {props.musicAlbums.map((e) => {
        return (
          <AlbumItem
            img={e.albumcoverUrl}
            title={e.title}
            author={e.author}
            toggleSwitcher={props.toggleSwitcher}
            key={e._id}
          />
        );
      })}
      <div className={"lastBlock"}></div>
    </div>
  );
};

export default BodyAlbums;
