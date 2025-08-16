import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

// Material Dashboard 2 React themes

let theme = createTheme({
  palette: {
    background: {
      default: "#000000"
    },
    primary: {
      main: '#000000ff',
    },
    secondary: {
      main: '#0048ffff',
    },
  },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider theme={theme}>
  <CssBaseline />
    <App />
  </ThemeProvider>
  </StrictMode>,
)
