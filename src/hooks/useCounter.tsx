import { useState } from 'react';

interface UseCounterOutput {
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

function useCounter(
  initialValue: number | (() => number) = 0
): UseCounterOutput {
  const [count, setCount] = useState(initialValue);

  const increment = () => setCount((x) => x + 1);
  const decrement = () => setCount((x) => x - 1);
  const reset = () => setCount(initialValue || 0);

  return {
    count,
    increment,
    decrement,
    reset,
  };
}

export default useCounter;
