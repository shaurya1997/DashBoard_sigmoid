import {
  SET_USER,
  LOGIN_ERROR,
  SET_LOADING,
  LOGOUT,
} from "../Action/ActionType";

const initialState = {
  data: null,
  error: "",
  isLoading: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        data: action.data,
        isLoading: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        error: action.data,
        isLoading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: action.value,
      };

    case LOGOUT: {
      return {
        ...initialState,
      };
    }
    default:
      return state;
  }
};

export default userReducer;
