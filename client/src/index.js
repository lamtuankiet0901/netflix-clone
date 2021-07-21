import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import AuthContextProvider from './authContext/authContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);