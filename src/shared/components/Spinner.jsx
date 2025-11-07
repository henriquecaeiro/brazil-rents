import React from 'react';
import PropTypes from 'prop-types';

/**
 * A simple, inline spinner component created with inline styles.
 * No external CSS is required.
 *
 * @typedef {object} SpinnerProps
 * @property {number} [size=18] - The width and height of the spinner in pixels.
 */

/**
 * @param {SpinnerProps} props
 * @returns {JSX.Element} The rendered spinner.
 */
export default function Spinner({ size = 18 }) {
  // The spinner is styled using inline styles for portability.
  const s = {
    width: size,
    height: size,
    border: '2px solid var(--border)',
    borderTopColor: 'var(--primary)',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite',
  };

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
      <div style={s} />
      {/* The keyframes for the animation are injected directly into the component. */}
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  );
}

Spinner.propTypes = {
  size: PropTypes.number,
};