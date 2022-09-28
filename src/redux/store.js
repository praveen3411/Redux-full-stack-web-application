import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose
} from "redux";
import { AppReducer } from "./app/appReducers";
import { AuthReducers } from "./auth/authReducer";
import thunk from "redux-thunk";

let rootReducers = combineReducers({
  apps: AppReducer,
  auth: AuthReducers
});

let createCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose();
export const store = legacy_createStore(
  rootReducers,
  createCompose(applyMiddleware(thunk))
);
