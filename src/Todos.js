import React, { Component } from 'react';
import Todo from './Todo';

export class Todos extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todos } = this.props;
    const todosMap = todos.map((todo, personIndex) => {
      return (
        <Todo
          key={personIndex}
          todo={todo}
          handleClick={(val, direction) =>
            this.props.handleClick(val, direction, personIndex)
          }
        />
      );
    });

    return <div>{todosMap}</div>;
  }
}

export default Todos;
