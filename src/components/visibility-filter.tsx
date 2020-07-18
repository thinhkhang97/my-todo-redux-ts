import React, { ReactNode } from "react";

interface Props {}

export class VisibilityFilter extends React.Component<Props> {
  render(): ReactNode {
    return (
      <div>
        <span>All</span>
        <span>Completed</span>
        <span>Incompleted</span>
      </div>
    );
  }
}
