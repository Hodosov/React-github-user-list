import { userReducer } from './UsersReducer'
import { combineReducers } from "redux";

export const Reducer = combineReducers({
    users: userReducer
})