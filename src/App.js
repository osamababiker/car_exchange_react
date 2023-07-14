import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Routes, Route } from 'react-router-dom';
import { Home, Register, Login, Profile } from "./pages";

import './App.css';
 
function App() {

  const user = useSelector((state) => state.user.currentUser);
  
  return (
    <main className="App">
      <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={user ? <Profile /> : <Login />} />
          <Route exact path='/register' element={user ? <Profile /> : <Register />} />
          <Route exact path='/profile' element={user ? <Profile /> : <Login />} />
      </Routes>
    </main>
  ); 
}

export default App;
