// src/GlobalStyle.js
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    background-color: #f5f5f5;
  }

  .app-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }

  .app-header {
    text-align: center;
    background-color: #333;
    color: white;
    padding: 20px;
    border-radius: 8px 8px 0 0;
  }
`;

export default GlobalStyle;
