import React from 'react';
import { Link } from 'react-router-dom';

/**
 * A component to display when a page is not found (404 error).
 *
 * @returns {JSX.Element} The rendered 404 page.
 */
export default function NotFound() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>404 — Page not found</h1>
      <p>Looks like the page you're after doesn't exist.</p>
      <p><Link to="/">Go back home</Link></p>
    </div>
  );
}