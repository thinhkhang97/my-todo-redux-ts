import { TodoState } from "../stores";
import { TodoAction } from "../actions/todo";

const initState: TodoState = {
  allIds: [],
  byIds: {},
};

export function todoReducer(
  state: TodoState = initState,
  action: TodoAction
): TodoState {
  const clonedState = { ...state };
  switch (action.type) {
    case "ADD_TODO":
      const addTodoId = action.payload.id;
      const { content } = action.payload;
      clonedState.allIds.push(addTodoId);
      clonedState.byIds[addTodoId] = {
        content,
        id: addTodoId,
        completed: false,
      };
      return clonedState;
    case "TOGGLE_TODO":
      const toogleTodoId = action.payload.id;
      const todoItem = clonedState.byIds[toogleTodoId];
      clonedState.byIds[toogleTodoId] = {
        ...todoItem,
        completed: !todoItem.completed,
      };
      return clonedState;
    default:
      return state;
  }
}
