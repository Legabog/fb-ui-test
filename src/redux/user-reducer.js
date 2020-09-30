import db from "../utils/firebase/firebase";
import { storage, addToArray } from "../utils/firebase/firebase";

const SET_USER = "SET_USER";
const CHANGE_AVATAR = "CHANGE_AVATAR";
const ADD_AVATAR_TO_PROFILE_AVATARS = "SET_ADD_AVATAR_TO_PROFILE_AVATARS";
const ADD_AVATAR_TO_RECENT_UPLOADS = "ADD_AVATAR_TO_RECENT_UPLOADS";
const CHANGE_AVATAR_BACKGROUND = "CHANGE_AVATAR_BACKGROUND";
const CHANGE_BIO = "CHANGE_BIO";
const TOGGLE_FETCH_BIO = "TOGGLE_FETCH_BIO";
const TOGGLE_FETCH_AVATAR = "TOGGLE_FETCH_AVATAR";
const TOGGLE_FETCH_PROFILE_AVATARS = "TOGGLE_FETCH_PROFILE_AVATARS";

let initialState = {
  fetchBio: false,
  fetchAvatar: false,
  fetchProfileAvatars: false,
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
        user: {
          ...state.user,
          Avatars: { ...state.user.Avatars, activeAvatarUrl: action.avatar },
        },
      };

    case ADD_AVATAR_TO_PROFILE_AVATARS:
      return {
        ...state,
        user: {
          ...state.user,
          Avatars: {
            ...state.user.Avatars,
            pofileAvatars: [...state.user.Avatars.pofileAvatars, action.avatar],
          },
        },
      };

    case ADD_AVATAR_TO_RECENT_UPLOADS:
      return {
        ...state,
        user: {
          ...state.user,
          Avatars: {
            ...state.user.Avatars,
            recentUploads: [...state.user.Avatars.recentUploads, action.avatar],
          },
        },
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

    case TOGGLE_FETCH_AVATAR:
      return {
        ...state,
        fetchAvatar: action.boolean,
      };

    case TOGGLE_FETCH_PROFILE_AVATARS:
      return {
        ...state,
        fetchProfileAvatars: action.boolean,
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

export const addAvatarToProfileAvatars = (avatar) => {
  return {
    type: ADD_AVATAR_TO_PROFILE_AVATARS,
    avatar,
  };
};

export const addAvatarToRecentUploads = (avatar) => {
  return {
    type: ADD_AVATAR_TO_RECENT_UPLOADS,
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

export const toggleFetchAvatar = (boolean) => {
  return {
    type: TOGGLE_FETCH_AVATAR,
    boolean,
  };
};

export const toggleFetchProfileAvatars = (boolean) => {
  return {
    type: TOGGLE_FETCH_PROFILE_AVATARS,
    boolean,
  };
};

export const sendAvatar = (img, activeAvatarUrl, email) => {
  return async (dispatch) => {
    dispatch(toggleFetchAvatar(true));
    dispatch(toggleFetchProfileAvatars(true));
    // ----------Base64Encoder
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      dispatch(changeAvatar(reader.result));
      dispatch(addAvatarToProfileAvatars(reader.result));
      dispatch(addAvatarToRecentUploads(reader.result));

      // ----------Firebase storage

      var storageRef = storage.ref();
      var imagesRef = storageRef.child(`avatars/${img.name}`);
      imagesRef
        .putString(reader.result + "", "data_url")
        .then(function (snapshot) {
          // Success

          console.log("Uploaded a data_url string!");

          db.collection("users_database")
            .get()
            .then((usersDatabase) => {
              usersDatabase.forEach((userDatabase) => {
                if (userDatabase.data().Email === email) {
                  const resultUrl = `https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/avatars%2F${img.name}?alt=media`;

                  db.collection("users_database")
                    .doc(userDatabase.id)
                    .update({
                      "Avatars.activeAvatarUrl": resultUrl,
                      "Avatars.pofileAvatars": addToArray(resultUrl),
                      "Avatars.recentUploads": addToArray(resultUrl),
                    })
                    .then(() => {
                      dispatch(toggleFetchAvatar(false));
                      dispatch(toggleFetchProfileAvatars(false));
                      console.log("Upd");
                      dispatch();
                    })
                    .catch(() => {
                      dispatch(toggleFetchAvatar(false));
                      dispatch(toggleFetchProfileAvatars(false));
                      console.log("Error");
                    });
                }
              });
            });
        })
        .catch((e) => {
          console.log(e + "error on uploading in storage");
        });
    };
    reader.onerror = (error) => {
      console.log("Error", error);
    };
  };
};

export const changeAvatarHandler = (avatar, email) => {
  return async (dispatch) => {
    dispatch(toggleFetchAvatar(true));
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
              .then(() => {
                console.log("Upd");
                dispatch(toggleFetchAvatar(false));
              })
              .catch(() => {
                console.log("Error");
                dispatch(toggleFetchAvatar(false));
              });
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
