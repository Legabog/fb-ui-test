import Axios from "axios";
import { firebaseConfig } from "../utils/firebase/firebase";

const AUTH_SUCCESS = "AUTH_SUCCESS";
const AUTH_LOGOUT = "AUTH_LOGOUT";
const TOGGLE_FETCHING = "TOGGLE_FETCHING";
const TOGGLE_REGISTRATION_ERROR = "TOGGLE_REGISTRATION_ERROR"

let initialState = {
  token: null,
  fetching: false,
  registrationError: false
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
        registrationError: action.boolean
      }  
    default:
      return state;
  }
};

export const auth = (email, password, isLogin) => {
  return async (dispatch) => {
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyB6fVPBle0emEYn8Jg-tqAQ4fCSC-JTeFI`;

    if (isLogin) {
      url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyB6fVPBle0emEYn8Jg-tqAQ4fCSC-JTeFI`;
    }
    dispatch(toggleFetching(true));

    const response = await Axios.post(url, authData);
    dispatch(toggleFetching(false));
    const data = response.data;

    const expirationDate = new Date(
      new Date().getTime() + data.expiresIn * 1000
    );

    localStorage.setItem("token", data.idToken);
    localStorage.setItem("userId", data.localId);
    localStorage.setItem("expirationDate", expirationDate);

    dispatch(authSuccess(data.idToken));
    dispatch(autoLogout(data.expiresIn));
  };
};

export const signIn = (email, password) => {
  return async (dispatch) => {
    const signInData = {
      email,
      password,
      returnSecureToken: true,
    };

    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${firebaseConfig.apiKey}`;

    const response = await Axios.post(url, signInData);

    const data = response.data;

    const expirationDate = new Date(
      new Date().getTime() + data.expiresIn * 1000
    );

    localStorage.setItem("token", data.idToken);
    localStorage.setItem("userId", data.localId);
    localStorage.setItem("expirationDate", expirationDate);

    dispatch(authSuccess(data.idToken));
    dispatch(autoLogout(data.expiresIn));
  };
};

export const signUp = (email, password) => {
  return async (dispatch) => {
    const signUpData = {
      email,
      password,
      returnSecureToken: true,
    };

    let url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${firebaseConfig.apiKey}`;

    Axios.post(url, signUpData)
    .then( response => {
      dispatch(toggleRegistrationError(false))
      const data = response.data;
      Axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=${firebaseConfig.apiKey}`,
        { requestType: "VERIFY_EMAIL", idToken: data.idToken }
      );
      console.log(data);
    })
    .catch((e) => dispatch(toggleRegistrationError(true)));
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

export const logout = () => {
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

export const toggleRegistrationError = (boolean) => {
  return {
    type: TOGGLE_REGISTRATION_ERROR,
    boolean
  }
}

export default authReducer;
