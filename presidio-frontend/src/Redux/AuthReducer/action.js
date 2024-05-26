import { LOGIN_FAILUER,LOGIN_SUCCESS,LOGIN_REQUEST, SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE,GET_SELLER_SUCCESS } from "./actionTypes";

import axios from "axios";  



export const login = (userData) => (dispatch) => {
    dispatch({ type: LOGIN_REQUEST });
    return axios.post("https://presidio-backend-render.onrender.com/api/users/login", userData)
      .then((res) => {
        console.log(res.data.msg)
        if(res.data.token){
            localStorage.setItem('token', res.data.token);
        }
        dispatch({ type: LOGIN_SUCCESS, payload: { token: res.data.token, loginMessage: res.data.msg } });
      })
      .catch((err) => {
        dispatch({ type: LOGIN_FAILUER, payload: { token: '', loginMessage: err.message } });
      });
};


export const signup = (userData) => (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    return axios.post("https://presidio-backend-render.onrender.com/api/users/register", userData)
      .then((res) => {
        dispatch({ type: SIGNUP_SUCCESS, payload: res.data.msg });
      })
      .catch((err) => {
        dispatch({ type: SIGNUP_FAILURE, payload: err.message });
      });
  };



  export const selletinfo = (id) => (dispatch) => {
    dispatch({ type: SIGNUP_REQUEST });
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        Authorization: `${token}`,
      },
    };
    return axios.get(`https://presidio-backend-render.onrender.com/api/users/singleuser/${id}`,config)
      .then((res) => {
        console.log(res.data.data)
        dispatch({ type: GET_SELLER_SUCCESS,  payload: [res.data.data] });
      })
      .catch((err) => {
        dispatch({ type: SIGNUP_FAILURE, payload: err.message });
      });
  };
