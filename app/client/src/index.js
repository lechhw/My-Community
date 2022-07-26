import React from 'react';
import ReactDOM from 'react-dom/client';
import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import './index.css';
import App from './app';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './reducer/store';

// reset css
const GlobalStyle = createGlobalStyle`
${reset}

a {
  color: inherit;
  text-decoration: none;

  &:hover {
    color: inherit;
  }
}

button {
  border: 0;
  background: 0;
  cursor: pointer;
}
`;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyle />
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
