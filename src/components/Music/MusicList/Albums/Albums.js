import React from "react";
import "./Albums.css"

import HeaderAlbums from "./HeaderAlbums/HeaderAlbums.js";
import BodyAlbums from "./BodyAlbums/BodyAlbums.js";

import { connect } from "react-redux";
import { getMusicAlbumsData } from "../../../../redux/musicalbums-reducer";
import { toggleSwitcher } from "../../../../redux/musicalbums-reducer";
import Preloader from "../../../common/Preloader/Preloader";

const AlbumsList = (props) => {
  return (
    <>
      {props.Fetching ? <Preloader /> : null}
      <div className={"albums"}>
        <HeaderAlbums />
        <BodyAlbums
          musicAlbums={props.musicAlbums}
          isFetching={props.isFetching}
          toggleSwitcher={props.toggleSwitcher}
        />
      </div>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
    Fetching: state.musicAlbumsReducer.Fetching,
    toggleSwitcher: state.musicAlbumsReducer.toggleSwitcher,
  };
};

export default connect(mapStateToProps, {
  getMusicAlbumsData,
  toggleSwitcher,
})(AlbumsList);
