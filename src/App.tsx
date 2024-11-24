import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner';
import Projects from './components/Projects';

function App() {
  return (
    <div className='homeBackground flex flex-col'>
      <Navbar></Navbar>
      <section className="flex justify-center mt-12">
        <div className="w-[72rem] mx-12">
            <Banner></Banner>
            <Projects></Projects>
          </div>
      </section>
    </div>
  );
}

export default App;
