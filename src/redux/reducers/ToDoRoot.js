import { combineReducers } from "redux";
import ToDoReducer from "./ToDoReducer";
export const todoRootReducer = combineReducers({ ToDoReducer })
