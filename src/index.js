import React from 'react';
import ReactDOM from 'react-dom/client';
import { GoogleOAuthProvider } from '@moeindana/google-oauth';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="418717586485-h6h0hoaf32nu5oargef0i17kf1usq8bi.apps.googleusercontent.com">
      <App />
    </GoogleOAuthProvider>
  </React.StrictMode>
);
