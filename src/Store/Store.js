import { createStore } from "redux";
import { applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Combinereducer from "../Store/Reducer/Combinereducer";

const store = createStore(Combinereducer, applyMiddleware(thunk));

export default store;
