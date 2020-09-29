import db from "../utils/firebase/firebase";
import { storage } from "../utils/firebase/firebase";

const SET_USER = "SET_USER";
const CHANGE_AVATAR = "CHANGE_AVATAR";
const CHANGE_AVATAR_BACKGROUND = "CHANGE_AVATAR_BACKGROUND";
const CHANGE_BIO = "CHANGE_BIO";
const TOGGLE_FETCH_BIO = "TOGGLE_FETCH_BIO";

let initialState = {
  fetchBio: false,
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
        ...state.user,
        Avatars: { ...state.user.Avatars, activeAvatarUrl: action.avatar },
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
    case TOGGLE_FETCH_BIO:
      return {
        ...state,
        fetchBio: action.boolean,
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

export const toggleFetchBio = (boolean) => {
  return {
    type: TOGGLE_FETCH_BIO,
    boolean,
  };
};

export const sendAvatar = (img, activeAvatarUrl, email) => {
  return async (dispatch) => {
    debugger;

    // base64 Encoder
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => dispatch(changeAvatar(reader.result));
    reader.onerror = (error) => {
      console.log("Error", error);
    };
    dispatch(changeAvatar(window.URL.createObjectURL(img)));
    //

    //----------Firebase storage

    var storageRef = storage.ref();
    var imagesRef = storageRef.child(`avatars/${activeAvatarUrl.name}`);
    imagesRef
      .putString(activeAvatarUrl + "", "data_url")
      .then(function (snapshot) {
        console.log("Uploaded a data_url string!");
      });

    //

    //  //-------------- Firestore db
    //     .then(() => {
    //       db.collection("users_database")
    //         .get()
    //         .then((usersDatabase) => {
    //           usersDatabase.forEach((userDatabase) => {
    //             if (userDatabase.data().Email === email) {
    //               db.collection("users_database")
    //                 .doc(userDatabase.id)
    //                 .update({
    //                   "Avatars.activeAvatarUrl": img,
    //                 })
    //                 .then(() => console.log("Upd"))
    //                 .catch(() => console.log("Error"));
    //             }
    //           });
    //         });
    //     });
    //
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
                "Avatars.activeAvatarUrl": avatar,
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

export const changeBioHandler = (bio, email, func) => {
  return async (dispatch) => {
    await dispatch(changeBio(bio));
    dispatch(toggleFetchBio(true));

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
              .then(() => {
                console.log("Upd");
                dispatch(toggleFetchBio(false));
                func();
              })
              .catch(() => {
                console.log("Error");
                dispatch(toggleFetchBio(true));
              });
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
