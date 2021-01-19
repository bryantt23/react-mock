import React, { Component } from 'react';
import Task from './Task';

export class Todo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todo } = this.props;
    const tasks = todo.todos;
    const tasksMap = tasks.map((task, index) => {
      return (
        <Task
          key={index}
          task={task}
          handleClick={e => {
            const direction = e.target.innerText;
            console.log('e', e.target.innerText);
            this.props.handleClick(index, direction + ' ' + index);
          }}
        />
      );
    });
    return (
      <div>
        {todo.name} {tasksMap}
      </div>
    );
  }
}

export default Todo;
