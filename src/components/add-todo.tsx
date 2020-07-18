import React, { ReactNode } from "react";
import { connect, ConnectedProps } from "react-redux";
import * as actions from "../actions/todo";

const mapDispatchToProps = {
  addTodo: actions.addTodo,
};

const mapStateToProps = () => {};

const connector = connect(mapStateToProps, mapDispatchToProps);

type ConnectorType = ConnectedProps<typeof connector>;

type Props = ConnectorType & {};

class AddTodo extends React.Component<Props> {
  handleAddTodo = (): void => {
    this.props.addTodo("new item");
  };

  render(): ReactNode {
    return (
      <div>
        <input></input>
        <button onClick={this.handleAddTodo}>Add todo</button>
      </div>
    );
  }
}

export default connector(AddTodo);
