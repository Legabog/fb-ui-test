import React from "react";
import "./App.css";
import { connect } from "react-redux";
import { compose } from "redux";
import { Switch, Route, withRouter } from "react-router-dom";

import { setUser } from "./redux/user-reducer";
import { auth, signIn, signUp, autoLogin, logout } from "./redux/auth-reducer";

import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";

import ErrorRoute from "./components/common/ErrorRoute/ErrorRoute";
import Preloader from "./components/common/Preloader/Preloader";
import RegistrationBlock from "./components/Login/RegistrationBlock/RegistrationBlock";

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
              render={() =>
                this.props.fetching ? (
                  <Preloader />
                ) : (
                  <>
                    <Header logout={this.props.logout} />
                    <div className="app__body">
                      <Sidebar />
                      <Feed />
                      <Widgets />
                    </div>
                  </>
                )
              }
            />
            <Route render={() => <ErrorRoute />} />
          </Switch>
        </div>
      );
    } else {
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
                    auth={this.props.auth}
                    logout={this.props.logout}
                    signIn={this.props.signIn}
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
    registrationError: state.authReducer.registrationError
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    setUser,
    auth,
    signIn,
    signUp,
    autoLogin,
    logout,
  })
)(App);
