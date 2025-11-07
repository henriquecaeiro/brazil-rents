import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import styles from './Select.module.css';

/**
 * A custom select component with autocomplete/filtering functionality.
 * It behaves like a datalist-enabled input.
 *
 * @typedef {object} SelectProps
 * @property {string[]} [data=null] - The array of string options to display.
 * @property {string} name - The name of the input, used for form submission.
 * @property {string} [placeholder='Selecione um valor'] - The placeholder text for the input.
 */

/**
 * @param {SelectProps} props
 * @returns {JSX.Element} The rendered custom select component.
 */
export default function Select({ data = null, name, placeholder = 'Selecione um valor' }) {
  // The controlled value of the input, which is sent with the form.
  const [value, setValue] = useState('');

  // The options currently visible in the dropdown.
  const [options, setOptions] = useState(data || []);

  // Controls whether the dropdown is open or closed.
  const [isOpen, setIsOpen] = useState(false);

  const inputRef = useRef(null);

  function handleFocus() {
    setIsOpen(true);
  }

  function handleBlur() {
    // A small delay is used to allow the `onMouseDown` event on the options to fire before the dropdown closes.
    // Using `onMouseDown` instead of `onClick` for this reason.
    setTimeout(() => {
      setIsOpen(false);
    }, 150); // 150ms delay to ensure click is registered.
  }

  function handleChange(e) {
    setValue(e.target.value);
  }

  // When the `data` prop changes (e.g., after an async fetch),
  // this effect synchronizes the initial options.
  useEffect(() => {
    setOptions(data || []);
  }, [data]);

  // This effect filters the displayed options based on the user's input
  // without modifying the original `data` array.
  useEffect(() => {
    if (!data) {
      setOptions([]);
      return;
    }

    const needle = value.toLowerCase().trim();

    if (needle === '') {
      // If the input is empty, show all options.
      setOptions(data);
    } else {
      // Filter options, ignoring case.
      const filtered = data.filter((o) => String(o).toLowerCase().includes(needle));
      setOptions(filtered);
    }
  }, [value, data]);

  /**
   * Handles the selection of an option from the dropdown.
   * @param {string} optionValue - The value of the selected option.
   */
  function handleSelectOption(optionValue) {
    setValue(optionValue);

    // Keep the input focused after an option is selected to allow for quick changes.
    if (inputRef.current) {
      inputRef.current.focus();
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
  );
}

Select.propTypes = {
  data: PropTypes.arrayOf(PropTypes.string),
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};