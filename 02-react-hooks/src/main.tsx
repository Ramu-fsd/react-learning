import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BankingPreferencesProvider } from './context/BankingPreferencesContext';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BankingPreferencesProvider>
      <App />
    </BankingPreferencesProvider>
  </React.StrictMode>,
);
