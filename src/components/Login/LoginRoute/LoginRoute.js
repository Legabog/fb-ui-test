import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./LoginRoute.css";

const LoginRoute = (props) => {

  const [inputEmail, setInputEmail] = useState("");
  // -------Focus attribute
  const [focusInputEmail, setFocusInputEmail] = useState(false);
  const focusedInputEmail = (boolean) => {
    setFocusInputEmail(boolean);
  };
  //

  const [inputPassword, setInputPassword] = useState("");
  // -------Focus attribute
  const [focusInputPassword, setFocusInputPassword] = useState(false);
  const focusedInputPassword = (boolean) => {
    setFocusInputPassword(boolean);
  };
  //

  const inputEmailHandler = (e) => {
    setInputEmail(e.target.value);
  };

  const inputPasswordHandler = (e) => {
    setInputPassword(e.target.value);
  };

  const loginButtonSignInHandler = (e) => {
    e.preventDefault();
    props.signIn(inputEmail, inputPassword, true)
    setInputEmail("");
    setInputPassword("");
  };

  return (
    <div className="loginRoute__wrapper">
      <div className="loginRoute__body">
        <div className="loginRoute__header">
          <h1>Social network by legabog</h1>
        </div>
        <div className="loginRoute__form">
          <div className="loginRoute__form__header">
            <span>
              <div>Log in to Social network by legabog</div>
            </span>
          </div>
          <div className="loginRoute__form__body">
            <div className="loginRoute__email">
              <input
                type="text"
                name="email"
                id="email"
                placeholder="Email"
                className="loginRoute__einput"
                value={inputEmail}
                onChange={inputEmailHandler}
                onFocus={() => {
                  focusedInputEmail(true);
                }}
                onBlur={() => {
                  focusedInputEmail(false);
                }}
                style={{
                  borderColor: focusInputEmail ? "#1877f2" : props.loginError ? "red" : null ,
                  boxShadow: focusInputEmail ? "0 0 0 2px #e7f3ff" : null,
                }}
              />
            </div>

            <div className="loginRoute__password">
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                className="loginRoute__passinput"
                value={inputPassword}
                onChange={inputPasswordHandler}
                onFocus={() => {
                  focusedInputPassword(true);
                }}
                onBlur={() => {
                  focusedInputPassword(false);
                }}
                style={{
                  borderColor: focusInputPassword ? "#1877f2" : null,
                  boxShadow: focusInputPassword ? "0 0 0 2px #e7f3ff" : null,
                }}
              />
            </div>

            <div className="loginRoute__loginButton">
              <button
                className="loginButton"
                name="login"
                type="submit"
                id="loginButton"
                onClick={loginButtonSignInHandler}
              >
                Login
              </button>
            </div>
            <div className="loginRoute__forgottenAccount">
              <NavLink to={"/login"}>Forgotten account?</NavLink>
            </div>
            <div className="loginRoute__or">
              <span className="or">or</span>
            </div>

            <div className="login__signinblock__create_account_button">
              <NavLink
                className="create__an__account__button"
                to={"/login"}
                onClick={props.displayRegistrationBlockTrue}
              >
                Create an account
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRoute;
