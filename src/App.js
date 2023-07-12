import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { publicRequest } from './requestMethod';
import LoadingImage from './assets/images/capsule-loading.svg'; 
import { Home, Register, Login } from "./pages";

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
      </Routes>
    </div>
  ); 
}

export default App;
