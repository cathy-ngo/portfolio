import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home';
import Banner from './components/Banner';

function App() {
  return (
    <div className='h-screen homeBackground flex flex-col'>
      <Navbar></Navbar>
      <section className="flex justify-center h-screen mt-12">
        <div className="max-w-screen-xl w-full mx-32">
          <Banner></Banner>
        </div>
      </section>

    </div>
  );
}

export default App;
