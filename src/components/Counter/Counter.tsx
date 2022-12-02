import React, { useEffect } from 'react';
import useCounter from '../../hooks/useCounter';
import { getItem, setItem } from '../../helpers/localStorage';

const initialValue = () => {
  const count = JSON.parse(getItem('count') as string);
  if (count) return parseInt(count, 10);

  return 0;
};

export default function Counter() {
  const { increment, decrement, count } = useCounter(initialValue);

  useEffect(() => {
    setItem('count', count);
  }, [count]);

  return (
    <div>
      <h3>Current count: {count}</h3>
      <button type="button" onClick={increment}>
        Increment
      </button>
      <button type="button" onClick={decrement}>
        Decrement
      </button>
    </div>
  );
}
