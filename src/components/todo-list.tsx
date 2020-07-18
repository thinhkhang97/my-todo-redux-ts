import React, { ReactNode } from "react";
import * as actions from "../actions/todo";
import { connect, ConnectedProps } from "react-redux";
import { Store } from "../stores";

const mapDispatchToProps = {
  toggleTodo: actions.toggleTodo,
};

const mapStateToProps = (store: Store) => {
  const { todos } = store;
  const { byIds } = todos;

  // Get all key of the map.
  const keys = Object.keys(byIds);

  // Map each key to the value.
  const todoList = keys.map((key: string): {
    content: string;
    id: number;
    completed: boolean;
  } => {
    return byIds[+key];
  });
  return {
    todos: todoList,
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ConnectorType = ConnectedProps<typeof connector>;

type Props = ConnectorType & {};

class TodoList extends React.Component<Props> {
  renderTodos(): ReactNode {
    return this.props.todos.map(
      (item: {
        content: string;
        id: number;
        completed: boolean;
      }): ReactNode => <div>{item.content}</div>
    );
  }

  render(): ReactNode {
    return <div>{this.renderTodos()}</div>;
  }
}

export default connector(TodoList);
