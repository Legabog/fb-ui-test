import React, { Suspense } from "react";
import "./App.css";
import { connect } from "react-redux";
import { compose } from "redux";
import { Switch, Route, withRouter } from "react-router-dom";

import { setUser } from "./redux/user-reducer";
import { auth, autoLogin, logout } from "./redux/auth-reducer";

import Login from "./components/Login/Login";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Feed from "./components/Feed/Feed";
import Widgets from "./components/Widgets/Widgets";

import ErrorRoute from "./components/common/ErrorRoute/ErrorRoute";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {
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
        <div className="app">
          <Switch>
            <Route
              path="/"
              exact
              render={() => (
                <Login
                  setUser={this.props.setUser}
                  auth={this.props.auth}
                  logout={this.props.logout}
                />
              )}
            />
            <Route render={() => <ErrorRoute />} />
          </Switch>
        </div>
      );
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userReducer.user,
    token: state.authReducer.token,
    fetching: state.authReducer.fetching,
  };
};

export default compose(
  withRouter,
  connect(mapStateToProps, {
    setUser,
    auth,
    autoLogin,
    logout,
  })
)(App);
