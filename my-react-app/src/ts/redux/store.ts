import { createStore } from "redux";
import { filmsList, paginationFilmsList } from "./reducers";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    list:filmsList,
    pagination: paginationFilmsList
})

export const store = createStore(rootReducer);