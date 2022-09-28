import { GET_APP_FAILURE, GET_APP_REQUEST, GET_APP_SUCCESS } from "./app.types";

let initialState = {
  isLoading: false,
  isError: false,
  isSuccess: false,
  data: []
};
export const AppReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_APP_REQUEST: {
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      };
    }
    case GET_APP_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        isError: false,
        isSuccess: true,
        data: payload
      };
    }
    case GET_APP_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        isSuccess: false,
        data: []
      };
    }
    default:
      return state;
  }
};
