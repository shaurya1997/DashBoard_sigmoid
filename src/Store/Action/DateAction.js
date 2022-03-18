import { toastr } from "react-redux-toastr";
import JwtService from "../../JwtService/JwtService";
import {
  LOGOUT,
  SET_DATE_RANGE,
  SET_LOADING_DATE,
  SET_MIN_MAX_DATE,
} from "./ActionType";
import { logout } from "./UserAction";

export const getMinMaxdDate = () => {
  return (dispatch) => {
    dispatch({ type: SET_LOADING_DATE });
    JwtService.post("/getDateRange", {
      organization: "DemoTest",
      view: "Auction",
    })
      .then((response) => {
        dispatch({
          type: SET_MIN_MAX_DATE,
          value: response.data.result,
        });
      })
      .catch((error) => {
        if (error?.response?.status == 401) {
          dispatch(logout());
          window.location.href("/");
          toastr.error("", "something went wrong");
        } else {
          console.log("error", error);
        }
      });
  };
};

export const setDateRange = (value1, value2) => {
  return (dispatch) => {
    dispatch({ type: SET_DATE_RANGE, value1, value2 });
  };
};
