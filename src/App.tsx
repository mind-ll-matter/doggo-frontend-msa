import React from 'react';
import Header from './components/Header/Header';
import Dashboard from './pages/Dashboard';

import Cards from './pages/CardsPage/CardsPage';
import {Routes, Route} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
    <Header/>
    <Routes>
      <Route path = '/' element={<Dashboard/>}></Route>
      <Route path = '/cards' element = {<Cards/>}></Route>
    </Routes>
  </div>
  );
}

export default App;
