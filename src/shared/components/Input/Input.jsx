import React from 'react'
import styles from './Input.module.css'

export default function Input({
  type = 'text',
  placeholder = '',
  id,
  textarea = false, // when true, render <textarea>
  className = '', // ex.: "textArea outline" (classes do MESMO module)
  rows = 3,
  style,
  ...props
}) {
  const Comp = textarea ? 'textarea' : 'input'

  // Transforma "textArea outline" -> [styles.textArea, styles.outline]
  // Se a classe não existir no module, mantém o nome (para classes globais)
  const mapped = String(className)
    .split(/\s+/)
    .filter(Boolean)
    .map((token) => styles[token] || token)

  const cls = [styles.input, ...mapped].filter(Boolean).join(' ')

  return (
    <Comp
      id={id}
      {...(!textarea ? { type } : {})} // "type" só para <input>
      placeholder={placeholder}
      className={cls}
      {...(textarea ? { rows } : {})} // "rows" só para <textarea>
      style={style}
      {...props}
    />
  )
}
