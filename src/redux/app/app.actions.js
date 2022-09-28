import axios from "axios";
import { GET_APP_FAILURE, GET_APP_REQUEST, GET_APP_SUCCESS } from "./app.types";

export const appReducer = (params) => async (dispatch) => {
  dispatch({ type: GET_APP_REQUEST });
  try {
    let response = await axios.get(`http://localhost:5000/api/books`, params);
    dispatch({ type: GET_APP_SUCCESS, payload: response.data });
    return response.data;
  } catch (error) {
    dispatch({ type: GET_APP_FAILURE });
    console.log(error);
  }
};
