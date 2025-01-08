import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills';

function App() {
  return (
    <div className='homeBackground flex flex-col'>
      <Navbar></Navbar>
      <section className="flex justify-center mt-12">
        <div className="w-[72rem] mx-12">
            <Banner></Banner>
            <div className="flex flex-col gap-44">
              <Projects></Projects>
              <Skills></Skills>
            </div>
          </div>
      </section>
    </div>
  );
}

export default App;
