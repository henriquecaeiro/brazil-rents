import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

/**
 * A customizable button component that can be rendered as a button or any other component.
 * It applies styles from CSS modules based on the provided className.
 *
 * @typedef {object} ButtonProps
 * @property {React.ElementType} [as='button'] - The component or HTML tag to render.
 * @property {React.ReactNode} children - The content to be displayed inside the button.
 * @property {string} [className=''] - Additional class names to apply, which are mapped to CSS module classes.
 * @property {object} [props] - Any other props will be passed to the rendered component.
 */

/**
 * @param {ButtonProps} props
 * @returns {JSX.Element} The rendered button element.
 */
export default function Button({ as: Comp = 'button', children, className = '', ...props }) {
  // Maps space-separated `className` props to CSS module classes for styling.
  const moduleClasses = className
    .split(/\s+/)
    .filter(Boolean)
    .map((k) => styles[k])
    .filter(Boolean);

  const cls = [styles.button, ...moduleClasses].join(' ');

  return (
    <Comp className={cls} {...props}>
      {children}
    </Comp>
  );
}

Button.propTypes = {
  as: PropTypes.elementType,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};