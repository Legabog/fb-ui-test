import { createStore, combineReducers, applyMiddleware } from "redux";
import appReducer from "./app-reducer";
import userReducer from "./user-reducer";
import authReducer from "./auth-reducer"
import musicAlbumsReducer from "./musicalbums-reducer"
import musicPlayListReducer from "./musicalplaylists-reducer"

import thunk from "redux-thunk";

let root_reducer = combineReducers({
  appReducer,
  userReducer,
  authReducer,
  musicAlbumsReducer,
  musicPlayListReducer
});

let store = createStore(root_reducer, applyMiddleware(thunk));

window.store = store;

export default store;
