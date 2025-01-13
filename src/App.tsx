import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner';
import Projects from './components/Projects/Projects';
import Skills from './components/Skills';
import About from './components/About';
import Footer from './components/Footer';

function App() {
	return (
		<div className='homeBackground flex flex-col'>
			<Navbar></Navbar>

			<section className="flex justify-center mt-12">
				<div className="w-[72rem] mx-12">
					<div className="mb-64">
						<Banner></Banner>
					</div>
					<div className="flex flex-col gap-44">
						<Projects></Projects>
						<Skills></Skills>
						<About></About>
					</div>
				</div>
			</section>
			
			<div className="mt-14">
				<Footer></Footer>
			</div>
		</div>
	);
}

export default App;
