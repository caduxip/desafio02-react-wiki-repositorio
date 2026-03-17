import {createGlobalStyle} from 'styled-components';

export default createGlobalStyle`

  :root {
    color-scheme: dark;
    --bg-primary: #0d1117;
    --bg-secondary: #161b22;
    --surface-border: rgba(255, 255, 255, 0.08);
    --text-primary: #f0f6fc;
    --text-secondary: rgba(230, 237, 243, 0.72);
    --accent: #2f81f7;
    --accent-strong: #58a6ff;
  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    background:
      radial-gradient(circle at top, rgba(47, 129, 247, 0.16), transparent 30%),
      linear-gradient(180deg, #111827 0%, #0d1117 48%, #0a0f14 100%);
    color: var(--text-primary);
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body, input, button {
    font: inherit;
  }

  #root {
    min-height: 100vh;
  }

  ::selection {
    background: rgba(88, 166, 255, 0.32);
    color: #ffffff;
  }

  a {
    -webkit-tap-highlight-color: transparent;
  }
`;
