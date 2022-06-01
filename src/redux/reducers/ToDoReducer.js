const initialState = [{id:1,task:"one"}]

const ToDoReducer = (state = initialState, action) => {

    switch (action.type) {

        case "ADD": 
            let newState=[...state, action.payload]
            state = newState
            console.log("newState :",initialState)
            return state 
        case "REMOVE":
            return state = initialState;
        case "DELETE":
            return state.filter((elem) => {
                return elem.id !== action.payload
            })
        default:
            return state;
    }

}

export default ToDoReducer;