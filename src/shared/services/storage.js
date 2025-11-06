/**
 * A collection of utility functions for interacting with `localStorage`.
 * It provides safe JSON parsing and stringifying, with error handling.
 */
export const storage = {
  /**
   * Retrieves and parses a JSON value from localStorage.
   *
   * @param {string} key - The key of the item to retrieve.
   * @param {*} [fallback=null] - The value to return if the key is not found or if parsing fails.
   * @returns {*} The parsed value or the fallback.
   */
  get(key, fallback = null) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (error) {
      // If parsing fails, return the fallback value.
      console.error(`Error reading from localStorage for key "${key}":`, error);
      return fallback;
    }
  },

  /**
   * Stringifies and saves a value to localStorage.
   *
   * @param {string} key - The key under which to store the value.
   * @param {*} value - The value to store. It will be JSON.stringified.
   */
  set(key, value) {
    try {
      localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      // This can happen if storage is full or if the value is not serializable.
      console.error(`Error writing to localStorage for key "${key}":`, error);
    }
  },

  /**
   * Removes an item from localStorage.
   *
   * @param {string} key - The key of the item to remove.
   */
  remove(key) {
    localStorage.removeItem(key);
  },
};