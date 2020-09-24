import React from "react";
import "./BodyArtists.css";

import ItemArtists from "./ItemArtists/ItemArtists.js";

const BodyArtists = (props) => {
  let resultArray = [];

  props.musicAlbums.map((e) => {
    if (!resultArray.includes(e.author)) {
      resultArray.push(e.author);
    }
    return resultArray;
  });

  return (
    <div className={"bodyArtists"}>
      {resultArray.map((e) => (
        <ItemArtists
          key={Math.random()}
          nameArtist={e}
          tracks={props.musicAlbums.map((e) => e.tracks)}
        />
      ))}

      <div className={"lastBlock"}></div>
    </div>
  );
};

export default BodyArtists;
