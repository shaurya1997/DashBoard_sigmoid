import {
  SET_LOADING_DATE,
  SET_MIN_MAX_DATE,
  SET_DATE_RANGE,
} from "../Action/ActionType";

const initialState = {
  minDate: "",
  maxDate: "",
  isDateLoading: false,
  dateRange: [],
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MIN_MAX_DATE:
      return {
        ...state,
        minDate: action.value.startDate,
        maxDate: action.value.endDate,
        dateRange: [action.value.startDate, action.value.endDate],
        isDateLoading: false,
      };
    case SET_LOADING_DATE: {
      return {
        ...state,
        isDateLoading: true,
      };
    }
    case SET_DATE_RANGE: {
      return {
        ...state,
        dateRange: [action.value1, action.value2],
      };
    }
    default:
      return state;
  }
};

export default userReducer;
