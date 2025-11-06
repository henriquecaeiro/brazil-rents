import React from 'react';
import PropTypes from 'prop-types';
import { LoadingProvider } from '@/contexts/LoadingContext';

/**
 * A component that wraps the entire application with all necessary context providers.
 *
 * @typedef {object} AppProvidersProps
 * @property {React.ReactNode} children - The application components to be rendered.
 */

/**
 * @param {AppProvidersProps} props
 * @returns {JSX.Element} The application wrapped with providers.
 */
export function AppProviders({ children }) {
  // Currently, only the LoadingProvider is used.
  // More providers can be added here as the application grows.
  return <LoadingProvider>{children}</LoadingProvider>;
}

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};