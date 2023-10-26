import React from 'react';
import ReactDOM from 'react-dom';
import './frontend/index.css';
import App from './frontend/App';
import { UserProvider } from './backend/UserContext';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <UserProvider>
    <App />
  </UserProvider>,
  document.getElementById('root')
);
reportWebVitals();
