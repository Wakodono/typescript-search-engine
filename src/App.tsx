import React from 'react';
import './App.css';
import SearchPage from './components/SearchPage'
import DetailPage from './components/DetailPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
      <BrowserRouter>
            <Routes>
              <Route path='/' element={<SearchPage />} />
              <Route path='/details' element={<DetailPage/>} />
            </Routes>
      </BrowserRouter>
  );
}

export default App;
