import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from '@/app/App.jsx'
import { ThemeProvider } from '@/contexts/ThemeContext.jsx'
import '@/shared/styles/globals.css'
import '@/shared/styles/theme.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* App-level providers */}
    <ThemeProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
)
