const TOGGLE_PROFILE_UPDATE_VISIBILITY = "TOGGLE_PROFILE_UPDATE_VISIBILITY";
const TOGGLE_PROFILE_UPDATE_OPACITY = "TOGGLE_PROFILE_UPDATE_OPACITY";

let initialState = {
  profileUpdateVisibility: "hidden",
  profileUpdateOpacity: 0,
};

const profileUpdateAvatarReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PROFILE_UPDATE_VISIBILITY:
      return {
        ...state,
        profileUpdateVisibility: action.state,
      };

    case TOGGLE_PROFILE_UPDATE_OPACITY:
      return {
        ...state,
        profileUpdateOpacity: action.state,
      };
    default:
      return state;
  }
};

export const toggleProfileUpdateVisibility = (state) => {
  return {
    type: TOGGLE_PROFILE_UPDATE_VISIBILITY,
    state,
  };
};

export const toggleProfileUpdateOpacity = (state) => {
  return {
    type: TOGGLE_PROFILE_UPDATE_OPACITY,
    state,
  };
};

export const toggleProfileUpdateAvatar = (visibility, opacity) => {
  return (dispatch) => {
    if (visibility === "hidden" && opacity === 0) {
      dispatch(toggleProfileUpdateVisibility("visible"));
      dispatch(toggleProfileUpdateOpacity(1));
    } else {
      dispatch(toggleProfileUpdateVisibility("hidden"));
      dispatch(toggleProfileUpdateOpacity(0));
    }
  };
};


export default profileUpdateAvatarReducer;
