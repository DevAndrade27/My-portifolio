import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import CssBaseline from '@mui/material/CssBaseline';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <CssBaseline />
    {/* CssBaseline provides a consistent baseline for styles across browsers */}
    <App />
  </StrictMode>,
)
