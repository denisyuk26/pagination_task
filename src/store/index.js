import { createStore, combineReducers, applyMiddleware } from "redux";
import { getUsers } from "./reducers";
import thunk from "redux-thunk";

const store = createStore(
    combineReducers({
    users:getUsers,
    }),
  applyMiddleware(thunk)

    
)
export default store;