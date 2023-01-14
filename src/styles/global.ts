import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html {
    background-color: #1E1E1E;;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Lato', serif;
    font-size: 16px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
  }
`;
