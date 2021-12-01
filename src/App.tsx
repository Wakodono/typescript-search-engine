import React from 'react';
import './App.css';
import SearchPage from './components/SearchPage'
import Details from './components/Details'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header">
          <Routes>
            <Route path='/' element={<SearchPage />} />
            <Route path='/details' element={<Details/>} />
          </Routes>
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
