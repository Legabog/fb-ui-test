import db from "../utils/firebase/firebase";
import { storage, addToArray } from "../utils/firebase/firebase";
import {
  closeHandlerProfileUpdate,
  setTempAvatar,
  setTempAvatarBackground,
  setTempAvatarBackgroundName,
  setTempAvatarName,
  toggleProfileUpdateConditionForAvatar,
  toggleProfileUpdateStateComponent,
} from "./profile-update-avatar-reducer";

const SET_USER = "SET_USER";
const CHANGE_AVATAR = "CHANGE_AVATAR";
const ADD_AVATAR_TO_PROFILE_AVATARS = "SET_ADD_AVATAR_TO_PROFILE_AVATARS";
const ADD_AVATAR_TO_RECENT_UPLOADS = "ADD_AVATAR_TO_RECENT_UPLOADS";
const CHANGE_AVATAR_BACKGROUND = "CHANGE_AVATAR_BACKGROUND";
const CHANGE_BIO = "CHANGE_BIO";
const TOGGLE_FETCH_BIO = "TOGGLE_FETCH_BIO";
const TOGGLE_FETCH_AVATAR = "TOGGLE_FETCH_AVATAR";
const TOGGLE_FETCH_PROFILE_AVATARS = "TOGGLE_FETCH_PROFILE_AVATARS";
const TOGGLE_FETCH_AVATAR_BACKGROUND = "TOGGLE_FETCH_AVATAR_BACKGROUND";

let initialState = {
  fetchBio: false,
  fetchAvatar: false,
  fetchProfileAvatars: false,
  fetchAvatarBackground: false,
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

    case TOGGLE_FETCH_AVATAR_BACKGROUND:
      return {
        ...state,
        fetchAvatarBackground: action.boolean,
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

export const toggleFetchAvatarBackground = (boolean) => {
  return {
    type: TOGGLE_FETCH_AVATAR_BACKGROUND,
    boolean,
  };
};

export const avatarLoaderBase64Handler = (img) => {
  return async (dispatch) => {
    dispatch(toggleProfileUpdateStateComponent(1));
    dispatch(toggleProfileUpdateConditionForAvatar(0));
    dispatch(setTempAvatarName(img.name));

    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      dispatch(setTempAvatar(reader.result));
    };
    reader.onerror = (error) => {
      console.log("Oops base64 handler has an error", error);
    };
  };
};

export const sendAvatar = (avatar, avatarName, email) => {
  return async (dispatch) => {
    dispatch(toggleFetchAvatar(true));
    dispatch(toggleFetchProfileAvatars(true));
    dispatch(changeAvatar(avatar));
    dispatch(addAvatarToProfileAvatars(avatar));
    dispatch(addAvatarToRecentUploads(avatar));

    // ----------Firebase storage

    var storageRef = storage.ref();
    var imagesRef = storageRef.child(`avatars/${avatarName}`);
    imagesRef
      .putString(avatar + "", "data_url")
      .then(function (snapshot) {
        // Success
        console.log(
          `Success. Storage with name /avatars/ was updated. Avatar was uploaded. Path:/avatars/${avatarName}`
        );

        db.collection("users_database")
          .get()
          .then((usersDatabase) => {
            usersDatabase.forEach((userDatabase) => {
              if (userDatabase.data().Email === email) {
                const resultUrl = `https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/avatars%2F${avatarName}?alt=media`;

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
                    console.log("Success. Cloud FireStore was updated");
                  })
                  .then(() => {
                    dispatch(closeHandlerProfileUpdate());
                  })
                  .catch((e) => {
                    dispatch(toggleFetchAvatar(false));
                    dispatch(toggleFetchProfileAvatars(false));
                    dispatch(closeHandlerProfileUpdate());
                    console.log(e + "error on  uploading in Cloud FireStore");
                  });
              }
            });
          });
      })
      .catch((e) => {
        console.log(e + "error on uploading in storage");
      });
  };
};

export const changeAvatarPreHandler = (avatarUrl) => {
  return (dispatch) => {
    dispatch(toggleProfileUpdateStateComponent(1));
    dispatch(toggleProfileUpdateConditionForAvatar(1));
    dispatch(setTempAvatar(avatarUrl));
  };
};

export const changeAvatarHandler = (avatar, email) => {
  return async (dispatch) => {
    dispatch(toggleFetchAvatar(true));
    dispatch(changeAvatar(avatar));

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
                console.log("Success. Cloud FireStore was updated");
                dispatch(toggleFetchAvatar(false));
              })
              .then(() => {
                dispatch(closeHandlerProfileUpdate());
              })
              .catch((e) => {
                console.log(e + "error on  uploading in Cloud FireStore");
                dispatch(toggleFetchAvatar(false));
                dispatch(closeHandlerProfileUpdate());
              });
          }
        });
      });
  };
};

export const avatarBackgroundLoaderBase64Handler = (img) => {
  return async (dispatch) => {
    const reader = new FileReader();
    reader.readAsDataURL(img);
    reader.onload = () => {
      dispatch(setTempAvatarBackground(reader.result));
      dispatch(setTempAvatarBackgroundName(img.name));
    };
    reader.onerror = (error) => {
      console.log("Oops base64 handler has an error", error);
    };
  };
};

export const avatarBackgroundLoaderUrlHandler = (img) => {
  return (dispatch) => {
    dispatch(setTempAvatarBackground(img));
    dispatch(
      setTempAvatarBackgroundName(
        img
          .slice(
            "https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/avatars%2F"
              .length
          )
          .slice(0, -"?alt=media".length)
      )
    );
  };
};

export const clearTempAvatarBackgroundHandler = () => {
  return (dispatch) => {
    dispatch(setTempAvatarBackground(null));
    dispatch(setTempAvatarBackgroundName(null));
    document.getElementById("avatarBackground-uploader").value = "";
  };
};

export const changeAvatarBackgroundHandler = (
  background,
  backgroundName,
  email,
  secondaryFn
) => {
  return async (dispatch) => {
    dispatch(toggleFetchAvatarBackground(true));
    dispatch(changeAvatarBackground(background));

    // ----------Firebase storage

    var storageRef = storage.ref();
    var imagesRef = storageRef.child(`avatar-backgrounds/${backgroundName}`);
    imagesRef
      .putString(background + "", "data_url")
      .then(function (snapshot) {
        // Success
        console.log(
          `Success. Storage with name /avatar-backgrounds/ was updated. Background was uploaded. Path:/avatar-backgrounds/${backgroundName}`
        );

        db.collection("users_database")
          .get()
          .then((usersDatabase) => {
            usersDatabase.forEach((userDatabase) => {
              if (userDatabase.data().Email === email) {
                const resultUrl = `https://firebasestorage.googleapis.com/v0/b/social-network-legabog.appspot.com/o/avatar-backgrounds%2F${backgroundName}?alt=media`;

                db.collection("users_database")
                  .doc(userDatabase.id)
                  .update({
                    AvatarBackground: resultUrl,
                  })
                  .then(() => {
                    dispatch(toggleFetchAvatarBackground(false));
                    dispatch(setTempAvatarBackground(null));
                    dispatch(setTempAvatarBackgroundName(null));
                    document.getElementById("avatarBackground-uploader").value =
                      "";
                    console.log("Success. Cloud FireStore was updated");
                  })
                  .then(() => {
                    secondaryFn(false);
                  })
                  .catch((e) => {
                    dispatch(toggleFetchAvatarBackground(false));
                    dispatch(setTempAvatarBackground(null));
                    dispatch(setTempAvatarBackgroundName(null));
                    document.getElementById("avatarBackground-uploader").value =
                      "";
                    console.log(e + "error on  uploading in Cloud FireStore");
                  });
              }
            });
          });
      })
      .catch((e) => {
        dispatch(toggleFetchAvatarBackground(false));
        dispatch(setTempAvatarBackground(null));
        dispatch(setTempAvatarBackgroundName(null));
        document.getElementById("avatarBackground-uploader").value = "";
        console.log(e + "error on uploading in storage");
      });
  };
};

export const removeAvatarBackgroundHandler = (email) => {
  return (dispatch) => {
    dispatch(changeAvatarBackground(""));

    db.collection("users_database")
      .get()
      .then((usersDatabase) => {
        usersDatabase.forEach((userDatabase) => {
          if (userDatabase.data().Email === email) {
            db.collection("users_database")
              .doc(userDatabase.id)
              .update({
                AvatarBackground: "",
              })
              .then(() => {
                dispatch(toggleFetchAvatarBackground(false));
                dispatch(setTempAvatarBackground(null));
                dispatch(setTempAvatarBackgroundName(null));
                document.getElementById("avatarBackground-uploader").value = "";
                console.log("Success. Cloud FireStore was updated");
              })
              .catch((e) => {
                dispatch(toggleFetchAvatarBackground(false));
                dispatch(setTempAvatarBackground(null));
                dispatch(setTempAvatarBackgroundName(null));
                document.getElementById("avatarBackground-uploader").value = "";
                console.log(e + "error on  uploading in Cloud FireStore");
              });
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
