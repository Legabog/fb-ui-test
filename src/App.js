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

import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";

import ErrorRoute from "./components/common/ErrorRoute/ErrorRoute";
import Preloader from "./components/common/Preloader/Preloader";
import RegistrationBlock from "./components/Login/RegistrationBlock/RegistrationBlock";
import ConfirmEmailRoute from "./components/common/ConfirmEmailRoute/ConfirmEmailRoute";
import LoginRoute from "./components/Login/LoginRoute/LoginRoute";
import ConfirmedEmailRoute from "./components/common/ConfirmedEmailRoute/ConfirmedEmailRoute";

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
  })
)(App);
