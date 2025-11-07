import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from '@/app/App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@/shared/styles/globals.css';
import '@/shared/styles/theme.css';
import { AppProviders } from './providers/AppProviders';

// Create the root of the React application.
const root = createRoot(document.getElementById('root'));

// Render the application.
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <AppProviders>
        <App />
      </AppProviders>
    </BrowserRouter>
  </React.StrictMode>,
);