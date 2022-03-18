import axios from "axios";
import { LOGIN_ERROR, SET_USER, SET_LOADING, LOGOUT } from "./ActionType";
import { toastr } from "react-redux-toastr";

export const loginUser = (email, password, rememberMe) => {
  return (dispatch) => {
    dispatch({ type: SET_LOADING, value: true });
    axios
      .post("https://sigviewauth.sigmoid.io/signIn", {
        email,
        password,
        rememberMe,
      })
      .then((response) => {
        toastr.success("", "Sign Up SuccessFull");
        dispatch({ type: SET_USER, data: response.data });
        if (rememberMe) {
          localStorage.setItem("access_token", response.data.token);
        } else {
          sessionStorage.setItem("access_token", response.data.token);
        }
      })
      .catch((error) => {
        toastr.error("", "Wrong email or password");

        dispatch({
          type: LOGIN_ERROR,
          data: error.response.data.statusMessage,
        });
      });
  };
};

export const logout = () => {
  return (dispatch) => {
    localStorage.clear();
    sessionStorage.clear();
    dispatch({ type: LOGOUT });
  };
};

export const setLoading = (value) => {
  return (dispatch) => {
    dispatch({ type: SET_LOADING, value: value });
  };
};
