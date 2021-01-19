import Todos from './Todos';
import './App.css';

function App() {
  const todos = [
    { name: 'Winnie', todos: ['buy eggs', 'buy milk'] },
    { name: 'Brad', todos: ['buy meat', 'buy vegi'] },
    { name: 'Bob', todos: ['buy meat', 'buy vegi'] },
    { name: 'Thomas', todos: ['buy meat', 'buy vegi'] }
  ];

  //todos
  //deal with person 0, index 0, left click later
  //deal with person len-1, index len-1, right click later

  // winnie, eggs click right
  // result brad buy eggs, buy meat, buy vegi

  const handleClick = (val, personIndex, direction) => {
    // e.preventDefault();
    console.log('handleClick');
    console.log('task index in App', val);
    console.log('personIndex in App', personIndex);
    console.log('personIndex', direction);
    // console.log(e.target.value);
    // console.log(e.target.value);
  };

  return (
    <div className='App'>
      <Todos todos={todos} handleClick={handleClick} />
    </div>
  );
}

export default App;
