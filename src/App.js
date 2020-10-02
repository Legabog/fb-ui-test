import React, { Suspense } from "react";
import "./App.css";
import { connect } from "react-redux";
import { compose } from "redux";
import { Switch, Route, withRouter } from "react-router-dom";

import {
  setUser,
  setActiveUser,
  changeAvatar,
  changeAvatarPreHandler,
  changeAvatarHandler,
  avatarLoaderBase64Handler,
  sendAvatar,
  avatarBackgroundLoaderBase64Handler,
  avatarBackgroundLoaderUrlHandler,
  clearTempAvatarBackgroundHandler,
  changeAvatarBackgroundHandler,
  removeAvatarBackgroundHandler,
  changeBioHandler,
} from "./redux/user-reducer";
import {
  signIn,
  signUp,
  autoLogin,
  logoutButton,
  toggleLoginError,
} from "./redux/auth-reducer";
import { toggleProfileUpdateAvatar, closeHandlerProfileUpdate } from "./redux/profile-update-avatar-reducer";
import { toggleProfileSelectAvatarBackground, toggleWindowConfirmBackground } from "./redux/profile-select-avatar-background-reducer"
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
import {
  setMusicForPlayer,
  toggleIsPlaying,
  playPlayer,
  pausePlayer,
  setIndexOfTrack,
  nextTrack,
  previousTrack,
  shuffleMusic,
  setActiveTrackAndPlayerPlayListNull,
} from "./redux/musicplayer-reducer";

// ---------Main Components

// --------Logged in user

import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";
import MusicPlayerPanel from "./components/MusicPlayerPanel/MusicPlayerPanel";
import ErrorRoute from "./components/common/ErrorRoute/ErrorRoute";
import Preloader from "./components/common/Preloader/Preloader";

//
// ---------Not logged in user

import Login from "./components/Login/Login";
import RegistrationBlock from "./components/Login/RegistrationBlock/RegistrationBlock";
import Profile from "./components/Profile/Profile";

//

// -----Lazy components

const Music = React.lazy(() => import("./components/Music/Music"));

const MusicList = React.lazy(() =>
  import("./components/Music/MusicList/MusicList")
);

const ArtistsList = React.lazy(() =>
  import("./components/Music/MusicList/Artists/Artists")
);

const ArtistItemRouter = React.lazy(() =>
  import("./components/Music/ArtistItemRouter/ArtistItemRouter")
);

const AlbumsList = React.lazy(() =>
  import("./components/Music/MusicList/Albums/Albums")
);

const PlayLists = React.lazy(() =>
  import("./components/Music/MusicList/PlayLists/PlayLists")
);

const CreateAlbum = React.lazy(() =>
  import("./components/Music/MusicList/CreateAlbum/CreateAlbum")
);

const OwnPlayListsRouter = React.lazy(() =>
  import("./components/Music/OwnPlayListsRouter/OwnPlayListsRouter")
);

const LoginRoute = React.lazy(() =>
  import("./components/Login/LoginRoute/LoginRoute")
);

const ConfirmEmailRoute = React.lazy(() =>
  import("./components/common/ConfirmEmailRoute/ConfirmEmailRoute")
);

const ConfirmedEmailRoute = React.lazy(() =>
  import("./components/common/ConfirmedEmailRoute/ConfirmedEmailRoute")
);

const MusicPlayer = React.lazy(() =>
  import("./components/Music/MusicPlayer/MusicPlayer")
);

//

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
            {this.props.Fetching ? <Preloader /> : null}
            <Route
              path="/"
              exact
              render={() => (
                <>
                  <Header {...this.props} />
                  <div className="app__body">
                    <Sidebar {...this.props} />
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
                  <Suspense fallback={<Preloader />}>
                    <Header {...this.props} />
                    <div className="app__body">
                      <Music />
                    </div>
                  </Suspense>
                </>
              )}
            />

            <Route
              exact
              path="/music-list"
              component={() => (
                <>
                  <Suspense fallback={<Preloader />}>
                    <Header {...this.props} />
                    <div className="app__body">
                      <MusicList />
                    </div>
                  </Suspense>
                </>
              )}
            />

            <Route
              exact
              path="/music-list/artists"
              component={() => (
                <>
                  <Suspense fallback={<Preloader />}>
                    <Header {...this.props} />
                    <div className="app__body">
                      <ArtistsList />
                    </div>
                  </Suspense>
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
                    <Suspense fallback={<Preloader />}>
                      <Header {...this.props} />
                      <div className="app__body">
                        <ArtistItemRouter nameArtist={e.author} />
                      </div>
                    </Suspense>
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
                    <Suspense fallback={<Preloader />}>
                      <Header {...this.props} />
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
                    </Suspense>
                  </>
                )}
              />
            ))}

            <Route
              exact
              path="/music-list/albums"
              component={() => (
                <>
                  <Suspense fallback={<Preloader />}>
                    <Header {...this.props} />
                    <div className="app__body">
                      <AlbumsList />
                    </div>
                  </Suspense>
                </>
              )}
            />

            <Route
              exact
              path="/music-list/playlists"
              component={() => (
                <>
                  <Suspense fallback={<Preloader />}>
                    <Header {...this.props} />
                    <div className="app__body">
                      <PlayLists />
                    </div>
                  </Suspense>
                </>
              )}
            />

            <Route
              exact
              path="/music-list/playlists/create"
              component={() => (
                <>
                  <Suspense fallback={<Preloader />}>
                    <Header {...this.props} />
                    <div className="app__body">
                      <CreateAlbum
                        fetch={this.props.fetch}
                        addToPlayList={this.props.createNewPlayList}
                        update={this.props.getMyOwnPlayLists}
                      />
                    </div>
                  </Suspense>
                </>
              )}
            />

            {this.props.ownPlayLists.map((e) => (
              <Route
                key={Math.random()}
                exact
                path={`/music-playlists/${e.title}/`}
                component={() => (
                  <>
                    <Suspense fallback={<Preloader />}>
                      <Header {...this.props} />
                      <div className="app__body">
                        <OwnPlayListsRouter
                          id={e._id}
                          img={e.playlistcoverUrl}
                          title={e.title}
                          description={e.description}
                          tracks={e.tracks}
                          deleteOwnPlayList={this.props.deleteOwnPlayList}
                          deleteTrackFromPlayList={
                            this.props.deleteTrackFromPlayList
                          }
                          deleteTrackFetch={this.props.deleteTrackFetch}
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
                    </Suspense>
                  </>
                )}
              />
            ))}

            {/* ---------------Music player Routes Finish------------- */}

            <Route
              path="/friends"
              exact
              render={() => (
                <>
                  <Header {...this.props} />
                  <div className="app">
                    <Preloader />
                  </div>
                </>
              )}
            />

            {/*--------------- Profile Routes -------------------- */}
            <Route
              path="/profile"
              exact
              render={() => (
                <>
                  <Header {...this.props} />
                  <div className="app">
                    <Profile {...this.props} />
                  </div>
                </>
              )}
            />

            <Route
              path="/profile/about"
              exact
              render={() => (
                <>
                  <Header {...this.props} />
                  <div className="app">
                    <Profile {...this.props} />
                    <h1>About</h1>
                  </div>
                </>
              )}
            />

            <Route
              path="/profile/friends"
              exact
              render={() => (
                <>
                  <Header {...this.props} />
                  <div className="app">
                    <Profile {...this.props} />
                    <h1>Friends</h1>
                  </div>
                </>
              )}
            />

            <Route
              path="/profile/photos"
              exact
              render={() => (
                <>
                  <Header {...this.props} />
                  <div className="app">
                    <Profile {...this.props} />
                    <h1>Photos</h1>
                  </div>
                </>
              )}
            />

            <Route
              path="/profile/archive"
              exact
              render={() => (
                <>
                  <Header {...this.props} />
                  <div className="app">
                    <Profile {...this.props} />
                    <h1>Archive</h1>
                  </div>
                </>
              )}
            />

            <Route
              path="/profile/videos"
              exact
              render={() => (
                <>
                  <Header {...this.props} />
                  <div className="app">
                    <Profile {...this.props} />
                    <h1>Videos</h1>
                  </div>
                </>
              )}
            />
            {/*  */}

            <Route
              path="/groups"
              exact
              render={() => (
                <>
                  <Header {...this.props} />
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
                  <Header {...this.props} />
                  <div className="app">
                    <Preloader />
                  </div>
                </>
              )}
            />

            <Route render={() => <ErrorRoute />} />
          </Switch>
          <MusicPlayerPanel
            isPlaying={this.props.isPlaying}
            playPlayer={this.props.playPlayer}
            pausePlayer={this.props.pausePlayer}
            musicPlayerPlayList={this.props.musicPlayerPlayList}
            indexOfPlayingTrack={this.props.indexOfPlayingTrack}
            toggleIsPlaying={this.props.toggleIsPlaying}
            activeTrack={this.props.activeTrack}
            nextTrack={this.props.nextTrack}
            previousTrack={this.props.previousTrack}
            disablerButtonNext={this.props.disablerButtonNext}
            setActiveTrackAndPlayerPlayListNull={
              this.props.setActiveTrackAndPlayerPlayListNull
            }
          />
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
              <Suspense fallback={<Preloader />}>
                <div className="app">
                  <ConfirmEmailRoute
                    displayRegistrationBlockFalse={
                      this.displayRegistrationBlockFalse
                    }
                  />
                </div>
              </Suspense>
            )}
          />

          <Route
            path="/confirmed_email"
            exact
            render={() => (
              <Suspense fallback={<Preloader />}>
                <div className="app">
                  <ConfirmedEmailRoute />
                </div>
              </Suspense>
            )}
          />
          <Route
            path="/login"
            exact
            render={() => (
              <>
                <Suspense fallback={<Preloader />}>
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
                    opacityRegistrationBlock={
                      this.state.opacityRegistrationBlock
                    }
                    signUp={this.props.signUp}
                    registrationFetching={this.props.registrationFetching}
                    registrationError={this.props.registrationError}
                  />
                </Suspense>
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
    // user-reducer
    user: state.userReducer.user,
    fetchBio: state.userReducer.fetchBio,
    fetchAvatar: state.userReducer.fetchAvatar,
    fetchProfileAvatars: state.userReducer.fetchProfileAvatars,
    fetchAvatarBackground: state.userReducer.fetchAvatarBackground,
    // auth-reducer
    activeAccountEmail: state.authReducer.activeAccountEmail,
    token: state.authReducer.token,
    fetching: state.authReducer.fetching,
    registrationFetching: state.authReducer.registrationFetching,
    registrationError: state.authReducer.registrationError,
    loginError: state.authReducer.loginError,
    // music albums reducer
    musicAlbums: state.musicAlbumsReducer.musicAlbums,
    Fetching: state.musicAlbumsReducer.Fetching,
    recentlyPlayed: state.musicAlbumsReducer.recentlyPlayed,
    musicAlbumsSwitcher: state.musicAlbumsReducer.musicAlbumsSwitcher,
    // muisc playlists reducer
    ownPlayLists: state.musicPlayListReducer.ownPlayLists,
    deleteTrackFetch: state.musicPlayListReducer.deleteTrackFetch,
    // muisc player reducer
    isPlaying: state.musicPlayerReducer.isPlaying,
    musicPlayerPlayList: state.musicPlayerReducer.musicPlayerPlayList,
    indexOfPlayingTrack: state.musicPlayerReducer.indexOfPlayingTrack,
    activeTrack: state.musicPlayerReducer.activeTrack,
    disablerButtonNext: state.musicPlayerReducer.disablerButtonNext,
    disablerButtonPlay: state.musicPlayerReducer.disablerButtonPlay,
    // profile update avatar reducer
    profileUpdateVisibility:
      state.profileUpdateAvatarReducer.profileUpdateVisibility,
    profileUpdateOpacity: state.profileUpdateAvatarReducer.profileUpdateOpacity,
    profileUpdateStateComponent: state.profileUpdateAvatarReducer.profileUpdateStateComponent,
    profileUpdateConditionForAvatar: state.profileUpdateAvatarReducer.profileUpdateConditionForAvatar,
    profileUpdateTempAvatar: state.profileUpdateAvatarReducer.profileUpdateTempAvatar,
    profileUpdateTempAvatarName: state.profileUpdateAvatarReducer.profileUpdateTempAvatarName,
    profileUpdateTempAvatarBackground: state.profileUpdateAvatarReducer.profileUpdateTempAvatarBackground,
    profileUpdateTempAvatarBackgroundName: state.profileUpdateAvatarReducer.profileUpdateTempAvatarBackgroundName,
    // profile select avatar background
    windowConfirmBackgroundVisibility: state.profileSelectAvatarBackgroundReducer.windowConfirmBackgroundVisibility,
    windowConfirmBackgroundOpacity: state.profileSelectAvatarBackgroundReducer.windowConfirmBackgroundOpacity,
    profileSelectVisibility: state.profileSelectAvatarBackgroundReducer.profileSelectVisibility,
    profileSelectOpacity: state.profileSelectAvatarBackgroundReducer.profileSelectOpacity,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    setUser,
    setActiveUser,
    changeAvatar,
    avatarLoaderBase64Handler,
    sendAvatar,
    changeAvatarPreHandler,
    changeAvatarHandler,
    avatarBackgroundLoaderBase64Handler,
    avatarBackgroundLoaderUrlHandler,
    clearTempAvatarBackgroundHandler,
    changeAvatarBackgroundHandler,
    removeAvatarBackgroundHandler,
    changeBioHandler,
    toggleProfileUpdateAvatar,
    closeHandlerProfileUpdate,
    toggleProfileSelectAvatarBackground,
    toggleWindowConfirmBackground,
    signIn,
    signUp,
    autoLogin,
    logoutButton,
    toggleLoginError,
    getMusicAlbumsData,
    addToPlayList,
    switchStateOfPlayLists,
    addTrackToPlayList,
    getMyOwnPlayLists,
    createNewPlayList,
    deleteOwnPlayList,
    deleteTrackFromPlayList,
    setMusicForPlayer,
    toggleIsPlaying,
    playPlayer,
    pausePlayer,
    setIndexOfTrack,
    nextTrack,
    previousTrack,
    shuffleMusic,
    setActiveTrackAndPlayerPlayListNull,
  })
)(App);
