import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

/**
 * @typedef {object} LoadingContextValue
 * @property {boolean} loading - The current loading state.
 * @property {React.Dispatch<React.SetStateAction<boolean>>} setLoading - Function to update the loading state.
 */

/**
 * @type {React.Context<LoadingContextValue|null>}
 */
const LoadingContext = createContext(null);

/**
 * Provides a loading state to its children components.
 *
 * @typedef {object} LoadingProviderProps
 * @property {React.ReactNode} children - The components that will have access to the loading context.
 */

/**
 * @param {LoadingProviderProps} props
 * @returns {JSX.Element}
 */
export function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>{children}</LoadingContext.Provider>
  );
}

LoadingProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

/**
 * A custom hook to access the loading state from the LoadingContext.
 *
 * @returns {LoadingContextValue} The loading state and setter function.
 * @throws {Error} If used outside of a LoadingProvider.
 */
export function useLoading() {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
}