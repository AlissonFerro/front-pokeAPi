import React, { createContext, useContext, useState, useMemo } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { grey, deepPurple, amber } from '@mui/material/colors';

const ColorModeContext = createContext({ toggleColorMode: () => { } });
export const ThemeContext = React.createContext();

export const useColorMode = () => useContext(ColorModeContext);

export function ThemeColorProvider({ children }) {
  const [mode, setMode] = useState('light');

  function toggleColorMode(){
    setMode(prev => prev == 'light' ? 'dark' : 'light');
  };
  return <ThemeContext.Provider value={{ mode, toggleColorMode }}>
    {children}
  </ThemeContext.Provider>
}

export function ThemeContextProvider({ children }) {
  const { mode } = useContext(ThemeContext);

  const theme = useMemo(() =>
    createTheme({
      palette: {
        mode: mode ? 'light' : 'dark',
        background: {
          default: mode == 'light' ? '#FFFFFF' : '#121212',
          paper: mode == 'light' ? '#F5F5F5' : '#1E1E1E',
        },
        grey: {
          '50': '#fafafa',
          '100': '#f5f5f5',
          '200': '#eeeeee',
          '300': '#e0e0e0',
          '400': '#bdbdbd',
          '500': '#9e9e9e',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },

        typography: {
          fontFamily: [
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif'
          ].join(','),
          fontWeightLight: 300,
          fontWeightRegular: 400,
          fontWeightMedium: 500,
          fontWeightBold: 700,
        },
        primary: { 
          main: mode == 'light' ? deepPurple[600] : deepPurple[400],
          light: mode == 'light' ? deepPurple[500] : deepPurple[300],
          dark: mode == 'light' ? deepPurple[700] : deepPurple[500],
          contrastText: '#fff',
        },
        secondary: {
          main: mode == 'light' ? amber[600] : amber[500],
          light: mode == 'light' ? amber[500] : amber[300],
          dark: mode == 'light' ? amber[800] : amber[700],
          contrastText: mode == 'light' ? grey[900] : grey[900],
        },
        success: {
          main: '#4caf50',
        },
        error: {
          main: '#f44336',
        },
        text: {
          primary: mode == 'light' ? '#111111' : '#FFFFFF', // Texto principal
          secondary: mode == 'light' ? '#666666' : '#B0B0B0', // Texto secundário
        },
        action: {
          active: mode == 'light' ? 'rgba(0, 0, 0, 0.54)' : 'rgba(255, 255, 255, 0.54)',
          hover: mode == 'light' ? 'rgba(0, 0, 0, 0.04)' : 'rgba(255, 255, 255, 0.04)',
          selected: mode == 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.08)',
          disabled: mode == 'light' ? 'rgba(0, 0, 0, 0.26)' : 'rgba(255, 255, 255, 0.3)',
          disabledBackground: mode == 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
          focus: mode == 'light' ? 'rgba(0, 0, 0, 0.12)' : 'rgba(255, 255, 255, 0.12)',
        }
      },
    }), [mode]);

  return (
    <ColorModeContext.Provider value={mode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}