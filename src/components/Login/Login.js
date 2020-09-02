import React, { useState } from "react";
import "./Login.css";
import { NavLink } from "react-router-dom";
import Axios from "axios";

const Login = (props) => {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const inputEmailHandler = (e) => {
    setInputEmail(e.target.value);
  };

  const inputPasswordHandler = (e) => {
    setInputPassword(e.target.value);
  };

  const loginButtonSignInHandler = (e) => {
    e.preventDefault();
    props.auth(inputEmail, inputPassword, true);
    setInputEmail("");
    setInputPassword("");
  };

  const registerButtonSignUpHandler = (e) => {
    props.auth(inputEmail, inputPassword, false);
    setInputEmail("");
    setInputPassword("");
  };

  return (
    <div className="login">
      <div className="login__mainblock">
        <div className="login__block">
          <div className="login__description">
            <h1>Social-network by legabog</h1>
            <h2>
              This social network helps you always stay in touch and communicate
              with your friends.
            </h2>
          </div>
          <div className="login__signinblock">
            <div className="login__signinblock__form">
              <form>
                <div className="login__signinblock__inputs">
                  <div className="login__signinblock__inputs_email">
                    <input
                      className="input__email"
                      type="text"
                      name="email"
                      id="email"
                      placeholder="Email"
                      value={inputEmail}
                      onChange={inputEmailHandler}
                    />
                  </div>
                  <div className="login__signinblock__inputs_password">
                    <input
                      className="input__password"
                      type="password"
                      name="password"
                      id="password"
                      placeholder="Password"
                      value={inputPassword}
                      onChange={inputPasswordHandler}
                    />
                  </div>
                </div>
                <div className="login__signinblock__login__button">
                  <button
                    className="login__button"
                    name="login"
                    type="submit"
                    id="login__button"
                    onClick={loginButtonSignInHandler}
                  >
                    Login
                  </button>
                </div>
                <div className="login__signinblock__restore__password">
                  <a href="/">Forgotten your password?</a>
                </div>
                <div className="login__signinblock__hr"></div>
                <div className="login__signinblock__create_account_button">
                  <NavLink
                    className="create__an__account__button"
                    to={"/"}
                    onClick={registerButtonSignUpHandler}
                  >
                    Create an account
                  </NavLink>
                </div>
              </form>
            </div>
            <div className="login__signinblock__help">
              <NavLink to={"/"} onClick={(e) => {
                Axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyB6fVPBle0emEYn8Jg-tqAQ4fCSC-JTeFI`, {
                  "requestType":"VERIFY_EMAIL",
                  "idToken":"z4W0bjBgPYcQLbygAT6ErL6qz3T2"
                })
              }}>
                Create a Page
              </NavLink>
              &nbsp; of a celebrity, music band or company.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
