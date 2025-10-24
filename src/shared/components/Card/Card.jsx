import React from 'react'
import styles from './Card.module.css'

export default function Card({ title, children, footer, fixed = false, center = false }) {
  return (
    <div className={`${styles.card} ${fixed ? styles.cardFixed : ''}`}>
      {title && (
        <h2 className={`${styles.header} ${center && 'text-center'}`}>
          <strong>{title}</strong>
        </h2>
      )}
      <div className={styles.body}>{children}</div>
      {footer && <div className={styles.footer}>{footer}</div>}
    </div>
  )
}
