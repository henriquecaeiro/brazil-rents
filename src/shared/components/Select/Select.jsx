import React, { useState, useRef, useEffect } from 'react'
import styles from './Select.module.css'

export default function Select({ data = null, name, placeholder = 'Selecione um valor' }) {
  // Controlled input value (vai pro FormData)
  const [value, setValue] = useState('')

  // Options currently visíveis no dropdown
  const [options, setOptions] = useState(data || [])

  // Controla se o dropdown tá aberto
  const [isOpen, setIsOpen] = useState(false)

  const inputRef = useRef(null)

  function handleFocus() {
    setIsOpen(true)
  }

  function handleBlur() {
    // pequeno delay pra permitir o onMouseDown das opções
    setTimeout(() => {
      setIsOpen(false)
    }, 0)
  }

  function handleChange(e) {
    setValue(e.target.value)
  }

  // sempre que "data" mudar (por exemplo vindo do hook async),
  // sincroniza options iniciais
  useEffect(() => {
    setOptions(data || [])
  }, [data])

  // filtra baseado no valor digitado SEM destruir a lista original
  useEffect(() => {
    if (!data) {
      setOptions([])
      return
    }

    const needle = value.toLowerCase().trim()

    if (needle === '') {
      // input vazio -> mostra tudo
      setOptions(data)
    } else {
      // filtra ignorando maiúsculas/minúsculas
      const filtered = data.filter((o) => String(o).toLowerCase().includes(needle))
      setOptions(filtered)
    }
  }, [value, data])

  function handleSelectOption(optionValue) {
    setValue(optionValue)

    // mantém foco no input após escolher
    if (inputRef.current) {
      inputRef.current.focus()
    }
  }

  return (
    <div className={styles.wrapper}>
      <input
        ref={inputRef}
        type="text"
        name={name}
        id={`${name}-select`}
        placeholder={placeholder}
        className={styles.selectInput}
        autoComplete="off"
        value={value}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
      />

      <div className={`${styles.selectContent} ${isOpen ? styles.open : ''}`}>
        {options && options.length > 0 ? (
          options.map((option, i) => (
            <p key={i} className={styles.option} onMouseDown={() => handleSelectOption(option)}>
              {option}
            </p>
          ))
        ) : (
          <p className={styles.empty}>Nenhum registro encontrado</p>
        )}
      </div>
    </div>
  )
}
