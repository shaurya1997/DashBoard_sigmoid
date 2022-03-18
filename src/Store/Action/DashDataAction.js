import { LOGOUT, SET_DASH_LOADING, SET_DASHBOARD_DATA } from "./ActionType";
import JwtService from "../../JwtService/JwtService";
import { tableData, barData, pieData } from "../../config";
import { toastr } from "react-redux-toastr";
import { logout } from "./UserAction";

export const getDashBoardData = (startDate, endDate) => {
  return (dispatch) => {
    const dateRange = {
      startDate,
      endDate,
    };

    dispatch({ type: SET_DASH_LOADING });

    let tablePayload = {
      ...tableData,
      chartObject: {
        ...tableData.chartObject,
        requestParam: {
          ...tableData.chartObject.requestParam,
          dateRange,
        },
      },
    };
    let barPayload = {
      ...barData,
      chartObject: {
        ...barData.chartObject,
        requestParam: {
          ...barData.chartObject.requestParam,
          dateRange,
        },
      },
    };
    let piePayload = {
      ...pieData,
      chartObject: {
        ...pieData.chartObject,
        requestParam: {
          ...pieData.chartObject.requestParam,
          dateRange,
        },
      },
    };

    let table = JwtService.post("/getData", tablePayload);
    let bar = JwtService.post("/getData", barPayload);
    let pie = JwtService.post("/getData", piePayload);

    Promise.all([table, bar, pie])
      .then((res) => {
        dispatch({ type: SET_DASHBOARD_DATA, value: res });
      })
      .catch((error) => {
        if (error && error.response && error.response.status == 401) {
          toastr.error("", "something went wrong");
          dispatch(logout());
          window.location.href = "/";
        } else {
          console.log("error", error);
        }
      });
  };
};
