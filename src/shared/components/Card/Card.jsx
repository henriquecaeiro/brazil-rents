import React from 'react'
import styles from './Card.module.css'

export default function Card({ title, children, footer }) {
  return (
    <div className={styles.card}>
      {title && <div className={styles.header}><strong>{title}</strong></div>}
      <div className={styles.body}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  )
}
