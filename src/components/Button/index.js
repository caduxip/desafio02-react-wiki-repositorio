import React from 'react'
import {ButtonContainer } from "./styles";

function Button({ children, type = "button", disabled }) {
  return (
    <ButtonContainer type={type} disabled={disabled} aria-disabled={disabled}>
      {children}
    </ButtonContainer>
  );
}

export default Button;
