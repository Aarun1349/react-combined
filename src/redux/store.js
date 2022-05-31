
import { createStore } from "redux"
import { rootReducer } from "./reducers/index";
import { todoRootReducer } from "./reducers/ToDoRoot";



const store = createStore(rootReducer)
const toDoStore = createStore(todoRootReducer)
export default store;
export { toDoStore }