const increment = (num) => {
    return { type: "INCREMENT", payload: num }
}

const decrement = (num) => {
    return { type: "DECREMENT", payload: num }
}

const multiply = (num) => {
    return { type: "MULTIPLY", payload: num }
}

const divide = (num) => {
    return { type: "DIVIDE", payload: num }
}
export { decrement, increment, divide, multiply }