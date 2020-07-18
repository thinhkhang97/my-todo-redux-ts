import { combineReducers } from "redux";
import { todoReducer } from "./todos";
import { filterReducer } from "./visibility-filters";

export const rootReducer = combineReducers({
  todos: todoReducer,
  visibilityFilters: filterReducer,
});
