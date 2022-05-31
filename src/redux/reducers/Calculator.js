// import { increment,decrement } from "../actions/Actions";
// import { useReducer } from "react";

const initialState = 1;

const calculateNumber = (state = initialState, action) => {


    switch (action.type) {
        case "DIVIDE":
            return state / action.payload;
        case "MULTIPLY":
            return state * action.payload;
        default:
            return state;

    }

}

export default calculateNumber;