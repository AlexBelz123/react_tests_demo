import { renderHook, act } from '@testing-library/react';
import useCounter from './useCounter';

describe('useCounter hook test suits', () => {
  test('exposes the count and increment/decrement functions', () => {
    const { result } = renderHook(useCounter);
    expect(result.current.count).toBe(0);
    act(() => result.current.increment());
    expect(result.current.count).toBe(1);
    act(() => result.current.decrement());
    expect(result.current.count).toBe(0);
  });

  test('allows customization of the initial count', () => {
    const { result } = renderHook(useCounter, {
      initialProps: 3,
    });
    expect(result.current.count).toBe(3);
  });
});
