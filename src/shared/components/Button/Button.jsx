import React from 'react'
import styles from './Button.module.css'

export default function Button({ as: Comp = 'button', children, className = '', ...props }) {
  // Minimal button with variants using CSS modules
  return (
    <Comp className={`${styles.button} ${className}`} {...props}>
      {children}
    </Comp>
  )
}
