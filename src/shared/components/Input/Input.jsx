import React from 'react';
import PropTypes from 'prop-types';
import styles from './Input.module.css';

/**
 * A versatile input component that can render as a standard input or a textarea.
 *
 * @typedef {object} InputProps
 * @property {string} [type='text'] - The input type (e.g., 'text', 'number', 'password'). Ignored if `textarea` is true.
 * @property {string} [placeholder=''] - The placeholder text.
 * @property {string} id - The unique ID for the input, used for labels and accessibility.
 * @property {boolean} [textarea=false] - If true, renders a `<textarea>` instead of an `<input>`.
 * @property {string} [className=''] - Additional class names for styling.
 * @property {number} [rows=3] - The number of rows for the textarea. Only applies if `textarea` is true.
 * @property {React.CSSProperties} [style] - Custom inline styles.
 * @property {object} [props] - Any other props will be passed to the input/textarea element.
 */

/**
 * @param {InputProps} props
 * @returns {JSX.Element} The rendered input or textarea element.
 */
export default function Input({
  type = 'text',
  placeholder = '',
  id,
  textarea = false,
  className = '',
  rows = 3,
  style,
  ...props
}) {
  const Comp = textarea ? 'textarea' : 'input';

  // Maps space-separated `className` props to CSS module classes for styling.
  const mapped = String(className)
    .split(/\s+/)
    .filter(Boolean)
    .map((token) => styles[token] || token);

  const cls = [styles.input, ...mapped].filter(Boolean).join(' ');

  return (
    <Comp
      id={id}
      {...(!textarea ? { type } : {})}
      placeholder={placeholder}
      className={cls}
      {...(textarea ? { rows } : {})}
      style={style}
      {...props}
    />
  );
}

Input.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string.isRequired,
  textarea: PropTypes.bool,
  className: PropTypes.string,
  rows: PropTypes.number,
  style: PropTypes.object,
};