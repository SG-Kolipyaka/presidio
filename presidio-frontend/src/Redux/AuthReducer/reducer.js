

import { LOGIN_FAILUER,GET_SELLER_SUCCESS, LOGIN_SUCCESS, LOGIN_REQUEST, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE } from "./actionTypes";

const initialState = {
  isLoading: false,
  isError: false,
  token: "",
  isAuth: false,
  signupMessage: "",
  loginMessage: "",
  seller:[]
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOGIN_REQUEST:
      return { ...state, isLoading: true, isAuth: false };
    case LOGIN_SUCCESS:
      return { ...state, isLoading: false, isAuth: true, token: payload.token, loginMessage: payload.loginMessage};
      case GET_SELLER_SUCCESS:
        return { ...state, isLoading: false, isAuth: true, seller:payload};
    case LOGIN_FAILUER:
      return { ...state, isLoading: false, isAuth: false,isError: true, loginMessage: payload };
    case SIGNUP_REQUEST:
      return { ...state, isLoading: true };
    case SIGNUP_SUCCESS:
      return { ...state, isLoading: false, signupMessage: payload };
    case SIGNUP_FAILURE:
      return { ...state, isLoading: false, isError: true, signupMessage: payload };
    default:
      return state;
  }
};
