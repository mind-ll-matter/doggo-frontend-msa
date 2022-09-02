import React from 'react';
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard';
import Cards from './pages/CardsPage/CardsPage';
import {Routes, Route} from 'react-router-dom';
import { createTheme, colors, ThemeProvider } from '@mui/material';
import './App.css';


const theme = createTheme({
  palette:{
    secondary:{
      main: colors.blueGrey[50],
    },
  },
})


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <Header/>
        <Routes>
          <Route path = '/' element={<Dashboard/>}></Route>
          <Route path = '/cards' element = {<Cards/>}></Route>
        </Routes>
      </div>
    </ThemeProvider>  
  );
}

export default App;
