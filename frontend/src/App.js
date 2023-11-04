// import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './components/main'
import Signup from './components/main/Signup';
import Login from './components/main/Login';
import Home from './components/main/Home';
import Image from './components/main/Image';

import Add from './components/main/Add';
import Navbar from './components/main/Navbar';
import UserAuth from './auth/UserAuth';

function App() {
  return (<BrowserRouter>
    <Navbar />
    <Routes >
      <Route path="/" element={<Home />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={ <UserAuth><Login /></UserAuth>} />
      <Route path="add" element={<Add />} />
      <Route path="image" element={<Image />} />
    </Routes>
  </BrowserRouter>)
}

export default App;
