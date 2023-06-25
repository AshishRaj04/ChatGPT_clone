import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider , createTheme } from '@mui/material' ;

import App from './App.jsx';
import './index.css';

const theme = createTheme({
  palette : {
    primary : {
      main : "#002333"
    },
    secondary : {
      main : "#159A9C"
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>

    <App />
    </ThemeProvider>
  </React.StrictMode>,
)
