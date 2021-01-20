import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import React, { Component } from 'react';

export class Task extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { task } = this.props;
    return (
      <div>
        <button
          onClick={e => {
            this.props.handleClick(e);
          }}
        >
          Left
        </button>
        {task}
        <button
          // function uses e, which is used by parent
          onClick={e => {
            this.props.handleClick(e);
          }}
        >
          Right
        </button>
      </div>
    );
  }
}

export default Task;
