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
          // e from child
          handleClick={e => {
            const direction = e.target.innerText;
            console.log('e', e.target.innerText);
            // index, direction from parent, direction from here
            this.props.handleClick(index, direction);
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
