import React from 'react'
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ padding: '2rem' }}>
      <h1>404 — Page not found</h1>
      <p>Looks like the page you're after doesn't exist.</p>
      <p><Link to="/">Go back home</Link></p>
    </div>
  )
}
