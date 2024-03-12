import React from 'react';
import './App.css';
import HomePage from './Components/HomePage';
import DataShow from './Components/DataShow';
import { Routes, Route } from 'react-router-dom';
import InsertLaw from './Components/InsertLaw';
import UpdateLaw from './Components/UpdateLaw';
import LoginPage from './Components/LoginPage';

function App() {
  return (
    <div className="Land">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Data' element={<DataShow />} />
        <Route path='/Insert' element={<InsertLaw />} />
        <Route path='/UpdateLaw/:id' element={<UpdateLaw />} />
        <Route path='/Login' element={<LoginPage />} />
      </Routes>
    </div>
  );
}

export default App