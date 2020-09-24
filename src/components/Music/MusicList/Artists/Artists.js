import React from "react";
import "./Artists.css"

import HeaderArtists from "./HeaderArtists/HeaderArtists.js";
import BodyArtists from "./BodyArtists/BodyArtists.js";

import { connect } from "react-redux";

const ArtistsList = (props) => {
  return (
    <div className={"artists"}>
      <HeaderArtists />
      <BodyArtists musicAlbums={props.musicAlbums} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
  };
};

export default connect(mapStateToProps, {})(ArtistsList);
