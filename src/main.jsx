import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { unstable_createMuiStrictModeTheme as createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
