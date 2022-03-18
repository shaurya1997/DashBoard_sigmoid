import { combineReducers } from "redux";
import userReducer from "./userReducer.js";
import { reducer as toastrReducer } from "react-redux-toastr";
import dateReducer from "./dateReducer";
import dashDataReducer from "./dashDataReducer";

export default combineReducers({
  user: userReducer,
  date: dateReducer,
  dashData: dashDataReducer,
  toastr: toastrReducer,
});
