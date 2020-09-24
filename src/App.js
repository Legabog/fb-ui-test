import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { compose } from "redux";
import { Switch, Route, withRouter } from "react-router-dom";

import { setUser } from "./redux/user-reducer";
import {
  signIn,
  signUp,
  autoLogin,
  logout,
  toggleLoginError,
} from "./redux/auth-reducer";
import { getMusicAlbumsData } from "./redux/musicalbums-reducer";
import {
  addToPlayList,
  switchStateOfPlayLists,
  addTrackToPlayList,
  getMyOwnPlayLists,
  createNewPlayList,
  deleteOwnPlayList,
  deleteTrackFromPlayList,
} from "./redux/musicalplaylists-reducer";

import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";
import Music from "./components/Music/Music";

import ErrorRoute from "./components/common/ErrorRoute/ErrorRoute";
import Preloader from "./components/common/Preloader/Preloader";
import RegistrationBlock from "./components/Login/RegistrationBlock/RegistrationBlock";
import ConfirmEmailRoute from "./components/common/ConfirmEmailRoute/ConfirmEmailRoute";
import LoginRoute from "./components/Login/LoginRoute/LoginRoute";
import ConfirmedEmailRoute from "./components/common/ConfirmedEmailRoute/ConfirmedEmailRoute";
import MusicList from "./components/Music/MusicList/MusicList";
import ArtistsList from "./components/Music/MusicList/Artists/Artists";
import ArtistItemRouter from "./components/Music/ArtistItemRouter/ArtistItemRouter";
import MusicPlayer from "./components/Music/MusicPlayer/MusicPlayer";
import AlbumsList from "./components/Music/MusicList/Albums/Albums";
import PlayLists from "./components/Music/MusicList/PlayLists/PlayLists";
import CreateAlbum from "./components/Music/MusicList/CreateAlbum/CreateAlbum";

class App extends React.Component {
  state = {
    visibilityRegistrationBlock: "hidden",
    opacityRegistrationBlock: 0,
  };

  displayRegistrationBlockTrue = () => {
    this.setState({
      visibilityRegistrationBlock: "visible",
      opacityRegistrationBlock: 1,
    });
  };

  displayRegistrationBlockFalse = () => {
    this.setState({
      visibilityRegistrationBlock: "hidden",
      opacityRegistrationBlock: 0,
    });
  };

  componentDidMount() {
    this.props.autoLogin();
    this.props.getMusicAlbumsData();
    this.props.getMyOwnPlayLists();
  }

  render() {
    if (!!this.props.token) {
      return (
        <div className="app">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <>
                  <Header logout={this.props.logout} />
                  <div className="app__body">
                    <Sidebar />
                    <Feed />
                    <Widgets />
                  </div>
                </>
              )}
            />
            {/* ---------------Music player Routes Start------------- */}
            <Route
              path="/music"
              exact
              render={() => (
                <>
                  <Header logout={this.props.logout} />
                  <div className="app__body">
                    <Music />
                  </div>
                </>
              )}
            />

            <Route
              exact
              path="/music-list"
              component={() => (
                <>
                  <Header logout={this.props.logout} />
                  <div className="app__body">
                    <MusicList />
                  </div>
                </>
              )}
            />

            <Route
              exact
              path="/music-list/artists"
              component={() => (
                <>
                  <Header logout={this.props.logout} />
                  <div className="app__body">
                    <ArtistsList />
                  </div>
                </>
              )}
            />

            {this.props.musicAlbums.map((e) => (
              <Route
                key={e._id}
                exact
                path={`/music-list/artists/${e.author}`}
                component={() => (
                  <>
                    <Header logout={this.props.logout} />
                    <div className="app__body">
                      <ArtistItemRouter nameArtist={e.author} />
                    </div>
                  </>
                )}
              />
            ))}

            {this.props.musicAlbums.map((e) => (
              <Route
                key={Math.random()}
                exact
                path={`/music-player/${e.author}/${e.title}`}
                component={() => (
                  <>
                    <Header logout={this.props.logout} />
                    <div className="app__body">
                      <MusicPlayer
                        nameArtist={e.author}
                        albumTitle={e.title}
                        img={e.albumcoverUrl}
                        switchStateOfPlayLists={
                          this.props.switchStateOfPlayLists
                        }
                        addTrackToPlayList={this.props.addTrackToPlayList}
                        playPlayer={this.props.playPlayer}
                        setMusicForPlayer={this.props.setMusicForPlayer}
                        setIndexOfTrack={this.props.setIndexOfTrack}
                        musicPlayerPlayList={this.props.musicPlayerPlayList}
                        indexOfPlayingTrack={this.props.indexOfPlayingTrack}
                        isPlaying={this.props.isPlaying}
                        activeTrack={this.props.activeTrack}
                        disablerButtonPlay={this.props.disablerButtonPlay}
                      />
                    </div>
                  </>
                )}
              />
            ))}

            <Route
              exact
              path="/music-list/albums"
              component={() => (
                <>
                  <Header logout={this.props.logout} />
                  <div className="app__body">
                    <AlbumsList />
                  </div>
                </>
              )}
            />

            <Route
              exact
              path="/music-list/playlists"
              component={() => (
                <>
                  <Header logout={this.props.logout} />
                  <div className="app__body">
                    <PlayLists />
                  </div>
                </>
              )}
            />

            <Route
              exact
              path="/music-list/playlists/create"
              component={() => (
                <>
                  <Header logout={this.props.logout} />
                  <div className="app__body">
                    <CreateAlbum
                      fetch={this.props.fetch}
                      addToPlayList={this.props.createNewPlayList}
                      update={this.props.getMyOwnPlayLists}
                    />
                  </div>
                </>
              )}
            />

            {/* ---------------Music player Routes Finish------------- */}

            <Route
              path="/friends"
              exact
              render={() => (
                <>
                  <Header logout={this.props.logout} />
                  <div className="app">
                    <Preloader />
                  </div>
                </>
              )}
            />

            <Route
              path="/groups"
              exact
              render={() => (
                <>
                  <Header logout={this.props.logout} />
                  <div className="app">
                    <Preloader />
                  </div>
                </>
              )}
            />

            <Route
              path="/messages"
              exact
              render={() => (
                <>
                  <Header logout={this.props.logout} />
                  <div className="app">
                    <Preloader />
                  </div>
                </>
              )}
            />
            <Route render={() => <ErrorRoute />} />
          </Switch>
        </div>
      );
    } else {
      if (this.props.fetching === true) {
        return (
          <div className="app">
            <Preloader />
          </div>
        );
      }
      return (
        <Switch>
          <Route
            path="/"
            exact
            render={() => (
              <>
                <div className="app">
                  <Login
                    displayRegistrationBlockTrue={
                      this.displayRegistrationBlockTrue
                    }
                    setUser={this.props.setUser}
                    signIn={this.props.signIn}
                    loginError={this.props.loginError}
                  />
                </div>
                <RegistrationBlock
                  displayRegistrationBlockFalse={
                    this.displayRegistrationBlockFalse
                  }
                  visibilityRegistrationBlock={
                    this.state.visibilityRegistrationBlock
                  }
                  opacityRegistrationBlock={this.state.opacityRegistrationBlock}
                  signUp={this.props.signUp}
                  registrationFetching={this.props.registrationFetching}
                  registrationError={this.props.registrationError}
                />
              </>
            )}
          />
          <Route
            path="/confirm_email"
            exact
            render={() => (
              <div className="app">
                <ConfirmEmailRoute
                  displayRegistrationBlockFalse={
                    this.displayRegistrationBlockFalse
                  }
                />
              </div>
            )}
          />

          <Route
            path="/confirmed_email"
            exact
            render={() => (
              <div className="app">
                <ConfirmedEmailRoute />
              </div>
            )}
          />
          <Route
            path="/login"
            exact
            render={() => (
              <>
                <div className="app">
                  <LoginRoute
                    signIn={this.props.signIn}
                    displayRegistrationBlockTrue={
                      this.displayRegistrationBlockTrue
                    }
                    loginError={this.props.loginError}
                    toggleLoginError={this.props.toggleLoginError}
                  />
                </div>
                <RegistrationBlock
                  displayRegistrationBlockFalse={
                    this.displayRegistrationBlockFalse
                  }
                  visibilityRegistrationBlock={
                    this.state.visibilityRegistrationBlock
                  }
                  opacityRegistrationBlock={this.state.opacityRegistrationBlock}
                  signUp={this.props.signUp}
                  registrationFetching={this.props.registrationFetching}
                  registrationError={this.props.registrationError}
                />
              </>
            )}
          />
          <Route
            render={() => (
              <div className="app">
                <ErrorRoute />
              </div>
            )}
          />
        </Switch>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    token: state.authReducer.token,
    fetching: state.authReducer.fetching,
    registrationFetching: state.authReducer.registrationFetching,
    registrationError: state.authReducer.registrationError,
    loginError: state.authReducer.loginError,
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
    Fetching: state.musicAlbumsReducer.Fetching,
    recentlyPlayed: state.musicAlbumsReducer.recentlyPlayed,
    musicAlbumsSwitcher: state.musicAlbumsReducer.musicAlbumsSwitcher,
    ownPlayLists: state.musicPlayListReducer.ownPlayLists,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    setUser,
    signIn,
    signUp,
    autoLogin,
    logout,
    toggleLoginError,
    getMusicAlbumsData,
    addToPlayList,
    switchStateOfPlayLists,
    addTrackToPlayList,
    getMyOwnPlayLists,
    createNewPlayList,
    deleteOwnPlayList,
    deleteTrackFromPlayList,
  })
)(App);
