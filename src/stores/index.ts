import { createStore } from "redux";
import { rootReducer } from "../reducers";
import { FilterType } from "../constants/types";

export interface TodoState {
  allIds: number[];
  byIds: {
    // Define a map with key type is number and value is object type { content: string; id: number; completed: boolean }
    [key: number]: { content: string; id: number; completed: boolean };
  };
}

export type FilterState = FilterType;

export interface Store {
  todos: TodoState;

  visibilityFilters: FilterState;
}

declare global {
  interface Window {
    _REDUX_DEVTOOLS_EXTENSION_COMPOSE_?: any;
  }
}

export const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);
