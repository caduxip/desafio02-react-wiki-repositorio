import styled from "styled-components";

export const ItemContainer = styled.div`
  width: 100%;
  padding: 12px 0 0;

  h3 {
    font-size: clamp(1.9rem, 3vw, 2.5rem);
    line-height: 1.1;
    font-weight: 800;
    letter-spacing: -0.03em;
    color: #f0f6fc;
    margin-bottom: 8px;
    text-shadow: 0 10px 24px rgba(0, 0, 0, 0.18);
  }

  hr {
    border: 0;
    height: 1px;
    background: linear-gradient(90deg, rgba(88, 166, 255, 0.4), rgba(255, 255, 255, 0.05));
    margin: 24px 0 0;
  }

  p {
    max-width: 60ch;
    font-size: 1rem;
    line-height: 1.6;
    font-weight: 500;
    color: rgba(230, 237, 243, 0.78);
    margin-bottom: 16px;
  }

  .repoMeta {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
  }

  .repoMeta span {
    padding: 8px 12px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.03);
    color: rgba(230, 237, 243, 0.72);
    font-size: 0.86rem;
    font-weight: 600;
  }

  .linkActions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 8px;
  }

  a,
  button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-width: 150px;
    padding: 10px 16px;
    border: 1px solid rgba(88, 166, 255, 0.45);
    border-radius: 999px;
    background: rgba(88, 166, 255, 0.12);
    color: #58a6ff;
    font-size: 15px;
    font-weight: 600;
    letter-spacing: 0.02em;
    text-decoration: none;
    cursor: pointer;
    transition: transform 0.2s ease, background-color 0.2s ease, border-color 0.2s ease,
      color 0.2s ease, box-shadow 0.2s ease;
  }

  a:hover,
  button:hover {
    background: rgba(88, 166, 255, 0.2);
    border-color: rgba(88, 166, 255, 0.75);
    color: #f0f6fc;
    transform: translateY(-1px);
  }

  a:active,
  button:active {
    transform: translateY(0);
  }

  a:focus-visible,
  button:focus-visible {
    outline: none;
    box-shadow: 0 0 0 3px rgba(88, 166, 255, 0.25);
  }

  .remover {
    border-color: rgba(248, 81, 73, 0.38);
    background: rgba(248, 81, 73, 0.12);
    color: #ff7b72;
  }

  .remover:hover {
    background: rgba(248, 81, 73, 0.18);
    border-color: rgba(248, 81, 73, 0.65);
    color: #ffdcd7;
  }

  @media (max-width: 640px) {
    width: 100%;

    a,
    button {
      width: 100%;
    }
  }
`;
