import React, { ReactNode } from "react";
import "./App.css";
import { AddTodo, TodoList, VisibilityFilter } from "./components";

interface Props {
  counterValueProps?: number;
  increaseValue?: () => void;
}

class App extends React.Component<Props> {
  render(): ReactNode {
    return (
      <div>
        <h3>Todo app</h3>
        <AddTodo />
        <TodoList />
        <VisibilityFilter />
      </div>
    );
  }
}

export default App;
