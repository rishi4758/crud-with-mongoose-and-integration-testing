import { combineReducers } from "redux";
import deviceReducer from "./reducer";
export default combineReducers({ data: deviceReducer });
