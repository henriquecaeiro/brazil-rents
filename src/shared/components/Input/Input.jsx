import React from 'react'
import styles from './Input.module.css'

export default function Input({ type = 'text', placehoder = false }) {
  return <input type={type} placeholder={placehoder} className={styles.input} />
}
