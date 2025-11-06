import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';

/**
 * A reusable card component for displaying content in a structured way.
 *
 * @typedef {object} CardProps
 * @property {string} [title] - The title to be displayed in the card's header.
 * @property {React.ReactNode} children - The main content of the card.
 * @property {React.ReactNode} [footer] - The content for the card's footer.
 * @property {boolean} [fixed=false] - If true, the card will have a fixed height.
 * @property {boolean} [center=false] - If true, the title will be centered.
 */

/**
 * @param {CardProps} props
 * @returns {JSX.Element} The rendered card component.
 */
export default function Card({ title, children, footer, fixed = false, center = false }) {
  return (
    <div className={`${styles.card} ${fixed ? styles.cardFixed : ''}`}>
      {title && (
        <h2 className={`${styles.header} ${center ? 'text-center' : ''}`}>
          <strong>{title}</strong>
        </h2>
      )}
      <div className={styles.body}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
  footer: PropTypes.node,
  fixed: PropTypes.bool,
  center: PropTypes.bool,
};