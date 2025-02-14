import React from 'react';
import App from './Login/components/App';
import './index.css';
import './lib/i18n';
import { createRoot } from 'react-dom/client';

const root = document.getElementById('root')!
createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)