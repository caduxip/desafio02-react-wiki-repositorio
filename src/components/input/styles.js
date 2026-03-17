import styled from "styled-components";

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 64px;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  background: linear-gradient(180deg, rgba(255, 255, 255, 0.03), rgba(255, 255, 255, 0.02));
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.03);
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease,
    transform 0.2s ease;

  &:focus-within {
    border-color: rgba(88, 166, 255, 0.7);
    background: rgba(255, 255, 255, 0.04);
    box-shadow: 0 0 0 4px rgba(88, 166, 255, 0.18);
    transform: translateY(-1px);
  }

  input {
    width: 100%;
    height: 100%;
    min-height: 64px;
    padding: 0 20px;
    border: 0;
    outline: none;
    background: transparent;
    color: #ffffff;
    font-size: 1rem;
    font-weight: 500;
  }

  input::placeholder {
    color: rgba(230, 237, 243, 0.42);
  }

  .srOnly {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`;
