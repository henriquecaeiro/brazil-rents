import React from 'react'
import styles from './Input.module.css'

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
  const Comp = textarea ? 'textarea' : 'input'

  const mapped = String(className)
    .split(/\s+/)
    .filter(Boolean)
    .map((token) => styles[token] || token)

  const cls = [styles.input, ...mapped].filter(Boolean).join(' ')

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
  )
}
