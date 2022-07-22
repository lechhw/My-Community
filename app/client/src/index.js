import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './index.css';
import App from './app';

// reset css
const GlobalStyle = createGlobalStyle`
${reset}
a {
  color: inherit;
  text-decoration: none;
}

button {
  cursor: pointer;
}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
