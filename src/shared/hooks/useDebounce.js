import { useEffect, useState } from 'react';

/**
 * A hook that debounces a value.
 * It will only update the returned value after the specified delay has passed without the input value changing.
 *
 * @param {*} value - The value to debounce.
 * @param {number} [delay=400] - The debounce delay in milliseconds.
 * @returns {*} The debounced value.
 * @note This hook is useful for delaying expensive operations, such as API calls, until the user has stopped typing.
 */
export function useDebounce(value, delay = 400) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    // Set up a timer to update the debounced value after the delay.
    const handler = setTimeout(() => {
      setDebounced(value);
    }, delay);

    // Clean up the timer if the value changes or the component unmounts.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]); // Only re-run the effect if value or delay changes.

  return debounced;
}