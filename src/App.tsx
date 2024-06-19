import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';

function App() {
  return (
    <div className='h-screen flex flex-col'>
      <Home></Home>
    </div>
  );
}

export default App;
