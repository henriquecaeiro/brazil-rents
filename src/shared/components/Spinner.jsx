import React from 'react'

export default function Spinner({ size = 18 }) {
  // Tiny inline spinner (no external CSS)
  const s = {
    width: size,
    height: size,
    border: '2px solid var(--border)',
    borderTopColor: 'var(--primary)',
    borderRadius: '50%',
    animation: 'spin 0.8s linear infinite'
  }

  return (
    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '.5rem' }}>
      <div style={s} />
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
    </div>
  )
}
