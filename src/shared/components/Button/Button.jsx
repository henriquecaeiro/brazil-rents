import React from 'react'
import styles from './Button.module.css'

export default function Button({ as: Comp = 'button', children, className = '', ...props }) {
  const moduleClasses = className
    .split(/\s+/)
    .filter(Boolean)
    .map((k) => styles[k])
    .filter(Boolean)

  const cls = [styles.button, ...moduleClasses].join(' ')

  return (
    <Comp className={cls} {...props}>
      {children}
    </Comp>
  )
}
