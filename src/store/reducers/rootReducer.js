import { combineReducers } from "redux";
import { uiReducer } from "./uiReducer";
import { randomReducer } from "./randomReducer";


export const rootReducer = combineReducers({
    ui: uiReducer,
    random: randomReducer
})