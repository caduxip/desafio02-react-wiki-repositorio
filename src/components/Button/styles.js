import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  min-height: 64px;
  padding: 0 22px;
  border: 0;
  border-radius: 20px;
  background: linear-gradient(135deg, #2f81f7, #1f6feb);
  color: #ffffff;
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.01em;
  cursor: pointer;
  box-shadow: 0 18px 36px rgba(31, 111, 235, 0.28);
  transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    filter: brightness(1.05);
    box-shadow: 0 22px 42px rgba(31, 111, 235, 0.34);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 12px 24px rgba(31, 111, 235, 0.25);
  }

  &:focus-visible {
    outline: none;
    box-shadow: 0 0 0 4px rgba(88, 166, 255, 0.22), 0 18px 36px rgba(31, 111, 235, 0.28);
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.6;
    filter: grayscale(0.15);
    box-shadow: none;
  }
`;
