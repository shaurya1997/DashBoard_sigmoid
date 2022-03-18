import { SET_DASH_LOADING, SET_DASHBOARD_DATA } from "../Action/ActionType";

const initialState = {
  isDashLoading: false,
  tableData: [],
  barData: [],
  pieData: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DASH_LOADING: {
      return {
        ...state,
        isDashLoading: true,
      };
    }
    case SET_DASHBOARD_DATA: {
      return {
        ...state,
        isDashLoading: false,
        tableData: action.value[0].data.result.data,
        barData: action.value[1].data.result.data,
        pieData: action.value[2].data.result.data,
      };
    }

    default:
      return state;
  }
};

export default userReducer;
