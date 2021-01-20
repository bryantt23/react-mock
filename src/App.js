import Todos from './Todos';
import './App.css';
import React from 'react';

const todosArr = [
  { name: 'Winnie', todos: ['buy eggs', 'buy milk'] },
  { name: 'Brad', todos: ['buy meat', 'buy vegi'] },
  { name: 'Bob', todos: ['buy meat', 'buy vegi'] },
  { name: 'Thomas', todos: ['buy meat', 'buy vegi'] }
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: todosArr
    };
  }

  //todos
  //deal with person 0, index 0, left click later
  //deal with person len-1, index len-1, right click later

  // winnie, eggs click right
  // result brad buy eggs, buy meat, buy vegi

  //gets parameters from children
  handleClick = (taskIndex, direction, personIndex) => {
    // e.preventDefault();
    console.log('handleClick');
    console.log('task index ', taskIndex);
    console.log('direction', direction);
    console.log('personIndex', personIndex);

    const todosCopy = [...this.state.todos];

    let removeItem;

    if (direction === 'Left' && personIndex > 0) {
      removeItem = todosCopy[personIndex].todos.splice(taskIndex, 1);
      todosCopy[personIndex - 1].todos.splice(taskIndex, 0, removeItem);
    } else if (direction === 'Right' && personIndex < todosCopy.length - 1) {
      removeItem = todosCopy[personIndex].todos.splice(taskIndex, 1);
      todosCopy[personIndex + 1].todos.splice(taskIndex, 0, removeItem);
    }

    this.setState({ todos: todosCopy });

    // console.log(e.target.value);
    // console.log(e.target.value);
  };
  render() {
    return (
      <div className='App'>
        {/* pass in function */}
        <Todos todos={this.state.todos} handleClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
