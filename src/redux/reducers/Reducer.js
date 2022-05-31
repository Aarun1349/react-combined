// import { increment,decrement } from "../actions/Actions";
// import { useReducer } from "react";

const initialState = 0;

const changeNumber = (state = initialState, action) => {
    if (action.payload === null) { action.payload = 1 }

    switch (action.type) {
        case "INCREMENT":
            return state + action.payload;
        case "DECREMENT":
            if (state !== 0)
                return state - action.payload;
            break;
        default:
            return state;

    }

}

export default changeNumber;