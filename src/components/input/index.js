import React from 'react'
import {InputContainer } from "./styles";

function Input({ placeholder, ariaLabel, value, onChange }) {
  return (
    <InputContainer>
      <label htmlFor="repository-search" className="srOnly">
        Buscar repositório
      </label>
      <input
        id="repository-search"
        type="text"
        name="repository"
        placeholder={placeholder}
        aria-label={ariaLabel}
        autoComplete="off"
        autoCorrect="off"
        autoCapitalize="none"
        spellCheck={false}
        value={value}
        onChange={onChange}
      />
    </InputContainer>
  );
}

export default Input;
