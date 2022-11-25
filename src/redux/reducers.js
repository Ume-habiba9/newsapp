import { combineReducers } from "redux";
import {UpdateFeed} from "./reactredux/reducer"

export const RootReducer = combineReducers({
    News: UpdateFeed,
})