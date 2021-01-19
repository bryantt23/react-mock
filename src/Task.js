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
          onClick={index => {
            this.props.handleClick(index);
          }}
        >
          Left
        </button>
        {task}
        <button
          onClick={index => {
            this.props.handleClick(index);
          }}
        >
          Right
        </button>
      </div>
    );
  }
}

export default Task;
