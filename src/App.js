import React from 'react'
import Home from './Home';
import Login from './Login';
import Signup from './Signup';
import Not404 from './Not404';
import './App.css';
import Homepage from './Homepage';
import {BrowserRouter , Route , Routes  } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>

    <Routes>
      <Route path='/' element={<Home /> }/>
      <Route path='/Homepage' element={<Homepage /> }/>
      <Route path='/Signup' element={<Signup /> }/>
      <Route path='/Login' element={<Login />}/>
      <Route path='*' element={<Not404 /> }/>
      </Routes>

    </BrowserRouter>

  );
}

export default App;
