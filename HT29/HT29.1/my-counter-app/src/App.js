import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './redux/counterSlice';

const App = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Counter: {count}</h1>
      <button
        onClick={() => dispatch(increment())}
        style={{ marginRight: '10px', padding: '10px 20px' }}
      >
        +
      </button>
      <button
        onClick={() => dispatch(decrement())}
        style={{ padding: '10px 20px' }}
      >
        -
      </button>
    </div>
  );
};

export default App;
