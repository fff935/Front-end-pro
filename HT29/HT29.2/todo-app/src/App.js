import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTodo } from './redux/todoSlice';

const App = () => {
  const [task, setTask] = useState('');
  const todos = useSelector((state) => state.todos.list);
  const dispatch = useDispatch();

  const handleAddTodo = () => {
    if (task.trim() !== '') {
      dispatch(addTodo(task));
      setTask('');
    }
  };

  return (
    <div style={{ maxWidth: '500px', margin: '50px auto', textAlign: 'center' }}>
      <h1>TODO App</h1>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task"
          style={{ padding: '10px', width: '70%', marginRight: '10px' }}
        />
        <button onClick={handleAddTodo} style={{ padding: '10px' }}>
          Add
        </button>
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {todos.map((todo) => (
          <li key={todo.id} style={{ textAlign: 'left', margin: '5px 0', padding: '5px', border: '1px solid #ccc' }}>
            {todo.text}
          </li>
        ))}
      </ul>
      <footer style={{ marginTop: '20px', fontSize: '18px' }}>
        Total tasks: {todos.length}
      </footer>
    </div>
  );
};

export default App;
