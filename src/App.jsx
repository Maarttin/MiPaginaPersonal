import React from 'react';
import AppRouter from './routes/AppRouter';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import { unstable_createMuiStrictModeTheme as createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';

const ThemeToggle = () => {
  const { toggleTheme } = useTheme();
  return <button onClick={toggleTheme}>Toggle Theme</button>;
};

function AppContent() {
  const { theme } = useTheme();
  const muiTheme = createTheme({
    palette: {
      mode: theme,
      background: {
        default: theme === 'light' ? '#ffffff' : '#000000',
        paper: theme === 'light' ? '#ffffff' : '#000000',
      },
      text: {
        primary: theme === 'light' ? '#000000' : '#ffffff',
      },
      primary: {
      main: theme === 'light' ? '#ffffff' : '#000000', 
      contrastText: theme === 'light' ? '#000000' : '#ffffff',
    },
    },
    typography: {
      fontFamily: 'Roboto Condensed, sans-serif',
    },
  });
  return (
    <MuiThemeProvider theme={muiTheme}>
      
      <AppRouter />
      
      
    </MuiThemeProvider>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;
