import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

// Optional: Add error boundary (recommended for production)
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode> {/* Recommended for development */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);