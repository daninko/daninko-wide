import { useState, useEffect } from 'react';

/**
 * Custom Hook to create a "debounced" state.
 *
 * Example Usage:
 * ```js
 * function MyComponent() {
 *   const [rawValue, debouncedValue, setValue] = useDebouncedState('', 500);
 *
 *   <input value={rawValue} onChange={newVal => setValue(newVal)} />
 *   <MyChildComponent value={debouncedValue} />
 * }
 * ```
 * 
 * @param initialState {Any} Initial state
 * @param delay {Number} Delay for the debounce, in milliseconds
 * @return {Array} array containing the raw value, the debounced value, and the setState function.
 */
export default function useDebouncedState(initialState, delay) {
  const [state, setState] = useState(initialState);
  const [debouncedState, setDebouncedState] = useState(initialState);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedState(state), delay);
    return () => clearTimeout(timer);
  }, [state]);

  return [state, debouncedState, setState];
}