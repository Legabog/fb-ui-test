import db from "../utils/firebase/firebase";

const SET_USER = "SET_USER";
const CHANGE_AVATAR = "CHANGE_AVATAR";
const CHANGE_AVATAR_BACKGROUND = "CHANGE_AVATAR_BACKGROUND";
const CHANGE_BIO = "CHANGE_BIO";

let initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case CHANGE_AVATAR:
      return {
        ...state,
        user: { ...state.user, Avatar: action.avatar },
      };

    case CHANGE_AVATAR_BACKGROUND:
      return {
        ...state,
        user: { ...state.user, AvatarBackground: action.background },
      };
    case CHANGE_BIO:
      return {
        ...state,
        user: { ...state.user, Bio: action.bio },
      };
    default:
      return state;
  }
};

export const setUser = (user) => {
  return {
    type: SET_USER,
    user,
  };
};

export const changeAvatar = (avatar) => {
  return {
    type: CHANGE_AVATAR,
    avatar,
  };
};

export const changeAvatarBackground = (background) => {
  return {
    type: CHANGE_AVATAR_BACKGROUND,
    background,
  };
};

export const changeBio = (bio) => {
  return {
    type: CHANGE_BIO,
    bio,
  };
};

export const changeAvatarHandler = (avatar, email) => {
  return async (dispatch) => {
    await dispatch(changeAvatar(avatar));

    db.collection("users_database")
      .get()
      .then((usersDatabase) => {
        usersDatabase.forEach((userDatabase) => {
          if (userDatabase.data().Email === email) {
            db.collection("users_database")
              .doc(userDatabase.id)
              .update({
                Avatar: avatar,
              })
              .then(() => console.log("Upd"))
              .catch(() => console.log("Error"));
          }
        });
      });
  };
};

export const changeAvatarBackgroundHandler = (background, email) => {
  return async (dispatch) => {
    await dispatch(changeAvatarBackground(background));

    db.collection("users_database")
      .get()
      .then((usersDatabase) => {
        usersDatabase.forEach((userDatabase) => {
          if (userDatabase.data().Email === email) {
            db.collection("users_database")
              .doc(userDatabase.id)
              .update({
                AvatarBackground: background,
              })
              .then(() => console.log("Upd"))
              .catch(() => console.log("Error"));
          }
        });
      });
  };
};

export const changeBioHandler = (bio, email) => {
  return async (dispatch) => {
    await dispatch(changeBio(bio));

    db.collection("users_database")
      .get()
      .then((usersDatabase) => {
        usersDatabase.forEach((userDatabase) => {
          if (userDatabase.data().Email === email) {
            db.collection("users_database")
              .doc(userDatabase.id)
              .update({
                Bio: bio,
              })
              .then(() => console.log("Upd"))
              .catch(() => console.log("Error"));
          }
        });
      });
  };
};

export const setActiveUser = (email) => {
  return (dispatch) => {
    db.collection("users_database")
      .get()
      .then((usersDatabase) => {
        usersDatabase.forEach((userDatabase) => {
          if (userDatabase.data().Email === email) {
            dispatch(setUser(userDatabase.data()));
          }
        });
      });
  };
};

export default userReducer;
