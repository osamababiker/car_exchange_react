import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home, Register, Login, Profile } from "./pages";

import './App.css';

function App() {
  return (
    <main className="App">
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/profile' element={<Profile />} />
      </Routes>
    </main>
  ); 
}

export default App;
