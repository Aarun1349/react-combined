const initialState = []

const ToDoReducer = (state = initialState, action) => {

    switch (action.type) {

        case "ADD":
            return state = [...state, action.payload];
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