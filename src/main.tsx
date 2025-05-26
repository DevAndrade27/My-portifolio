import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { CssBaseline } from '@mui/material'
import * as React from 'react';
import {ThemeProvider} from '@mui/material/styles'
import theme from './Theme.ts'
createRoot(document.getElementById('root')!).render(
  <React.Fragment>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {/* The rest of your application */}
      <StrictMode>
      <App />
      </StrictMode>
    </ThemeProvider>
    </React.Fragment>
  

)
