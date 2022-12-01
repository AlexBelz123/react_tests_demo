import React from 'react';
import useCounter from '../../hooks/useCounter';

export default function Counter() {
  const { increment, decrement, count } = useCounter(0);

  return (
    <div>
      <h3>{count}</h3>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}
