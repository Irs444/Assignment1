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
import LoginAuth from './auth/LoginAuth';
import { UserProvider } from './context/UserContext';


function App() {
  return (<BrowserRouter>
     <UserProvider>
    <Navbar />
    
    <Routes >
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="signup" element={<LoginAuth> <Signup /></LoginAuth>} />
      <Route path="login" element={ <LoginAuth><Login /></LoginAuth>} />
      <Route path="add" element={ <UserAuth><Add /> </UserAuth>} />
      <Route path="/home" element={<Image />} />
    </Routes>
    </UserProvider>
  </BrowserRouter>)
}

export default App;
