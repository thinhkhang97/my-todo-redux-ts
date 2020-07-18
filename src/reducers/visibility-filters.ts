import { FilterState } from "../stores";
import { FilterAction } from "../actions/visibility-filters";
import { FilterType } from "../constants/types";

const initState = FilterType.ALL;

export function filterReducer(
  state: FilterState = initState,
  action: FilterAction
): FilterState {
  switch (action.type) {
    case "SET_FILTER":
      return action.payload.filter;
    default:
      return state;
  }
}
