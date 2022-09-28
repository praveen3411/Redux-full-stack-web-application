import axios from "axios";
import {
  AUTH_LOGIN_FAILURE,
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCCESS,
} from "./auth.types";

export const AuthLogin = (payload) => async (dispatch) => {
  dispatch({ type: AUTH_LOGIN_REQUEST });
  try {
    let response = await axios.post(`https://reqres.in/api/login`, payload);
    dispatch({
      type: AUTH_LOGIN_SUCCCESS,
      payload: response.data.token,
    });
    return response.data.token;
  } catch (error) {
    dispatch({ type: AUTH_LOGIN_FAILURE });
    console.log(error);
  }
};
