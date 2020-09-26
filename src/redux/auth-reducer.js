import Axios from "axios";
import db, { firebaseConfig } from "../utils/firebase/firebase";

const AUTH_SUCCESS = "AUTH_SUCCESS";
const AUTH_LOGOUT = "AUTH_LOGOUT";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const TOGGLE_REGISTRATION_ERROR = "TOGGLE_REGISTRATION_ERROR";
const TOGGLE_REGISTRATION_FETCHING = "TOGGLE_REGISTRATION_FETCHING";
const TOGGLE_LOGIN_ERROR = "TOGGLE_LOGIN_ERROR";

let initialState = {
  token: null,
  fetching: false,
  registrationError: false,
  registrationFetching: false,
  loginError: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH_SUCCESS:
      return {
        ...state,
        token: action.token,
      };
    case AUTH_LOGOUT:
      return {
        ...state,
        token: null,
      };
    case TOGGLE_FETCHING:
      return {
        ...state,
        fetching: action.fetching,
      };
    case TOGGLE_REGISTRATION_ERROR:
      return {
        ...state,
        registrationError: action.boolean,
      };

    case TOGGLE_REGISTRATION_FETCHING:
      return {
        ...state,
        registrationFetching: action.fetching,
      };
    case TOGGLE_LOGIN_ERROR:
      return {
        ...state,
        loginError: action.error,
      };
    default:
      return state;
  }
};

export const signIn = (email, password, history, URL) => {
  return async (dispatch) => {
    const signInData = {
      email,
      password,
      returnSecureToken: true,
    };
    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`;
    dispatch(toggleFetching(true));

    Axios.post(url, signInData)
      .then((response) => {
        const data = response.data;
        const expirationDate = new Date(
          new Date().getTime() + data.expiresIn * 24000
        );

        localStorage.setItem("token", data.idToken);
        localStorage.setItem("userId", data.localId);
        localStorage.setItem("expirationDate", expirationDate);

        dispatch(authSuccess(data.idToken));
        dispatch(autoLogout(data.expiresIn));
        dispatch(toggleFetching(false));
        dispatch(toggleLoginError(false));
        history.push("/");
      })
      .catch((e) => {
        history.push(`${URL}`);
        dispatch(toggleLoginError(true));
        dispatch(toggleFetching(false));
      });
  };
};

export const signUp = (
  name,
  sername,
  telephone,
  email,
  password,
  bday,
  mday,
  yday,
  sex,
  history,
  URL
) => {
  return async (dispatch) => {
    const signUpData = {
      email,
      password,
      returnSecureToken: true,
    };

    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`;
    dispatch(toggleRegistrationFetching(true));

    Axios.post(url, signUpData)
      .then((response) => {
        dispatch(toggleRegistrationError(false));

        // add user to db
        db.collection("users_database")
          .add({
            Name: name.trim(),
            Sername: sername.trim(),
            Telephone_number: telephone.trim(),
            Email: email.trim(),
            Password: password.trim(),
            Birthday_data: `${bday}.${mday}.${yday}`,
            Gender:
              sex === 1
                ? "Female"
                : sex === 2
                ? "Male"
                : sex === -1
                ? "Other"
                : "None",
          })
          .then(() => {
            // verify message
            Axios.post(
              `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${firebaseConfig.apiKey}`,
              { requestType: "VERIFY_EMAIL", idToken: response.data.idToken }
            )
              .then(() => {
                dispatch(toggleRegistrationFetching(false));
                history.push("/confirm_email");
              })
              .catch(() => {
                dispatch(toggleRegistrationFetching(false));
                dispatch(toggleRegistrationError(true));
              });
          })
          .catch(() => {
            dispatch(toggleRegistrationFetching(false));
            dispatch(toggleRegistrationError(true));
          });
      })
      .catch((e) => {
        dispatch(toggleRegistrationFetching(false));
        dispatch(toggleRegistrationError(true));
      });
  };
};

export const authSuccess = (token) => {
  return {
    type: AUTH_SUCCESS,
    token,
  };
};

export const autoLogin = () => {
  return (dispatch) => {
    const token = localStorage.getItem("token");

    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(localStorage.getItem("expirationDate"));

      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));
        dispatch(
          autoLogout((expirationDate.getTime() - new Date().getTime()) / 1000)
        );
      }
    }
  };
};

export const autoLogout = (time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, time * 1000);
  };
};

export const logout = (history) => {
  localStorage.removeItem("token");
  localStorage.removeItem("userId");
  localStorage.removeItem("expirationDate");
  return {
    type: AUTH_LOGOUT,
  };
};

export const toggleFetching = (fetching) => {
  return {
    type: TOGGLE_FETCHING,
    fetching,
  };
};

export const toggleRegistrationFetching = (fetching) => {
  return {
    type: TOGGLE_REGISTRATION_FETCHING,
    fetching,
  };
};

export const toggleRegistrationError = (boolean) => {
  return {
    type: TOGGLE_REGISTRATION_ERROR,
    boolean,
  };
};

export const toggleLoginError = (error) => {
  return {
    type: TOGGLE_LOGIN_ERROR,
    error,
  };
};

export default authReducer;
