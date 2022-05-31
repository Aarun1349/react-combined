import { combineReducers } from "redux";
import changeNumber from "./Reducer";
import calculateNumber from "./Calculator";
export const rootReducer = combineReducers({ changeNumber, calculateNumber })
