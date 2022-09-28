import {
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCCESS
} from "./auth.types";

let initialState = {
  isLoading: false,
  isError: false,
  isSucccess: false,
  token: ""
};
export const AuthReducers = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH_LOGIN_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSucccess: false
      };
    }
    case AUTH_LOGIN_SUCCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSucccess: true,
        token: payload
      };
    }
    case AUTH_LOGIN_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSucccess: false,
        token: ""
      };
    }
    default:
      return state;
  }
};
