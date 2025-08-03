// src/App.jsx
import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Stars from './components/Stars';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`relative min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
      <CustomCursor />
      {/* The Stars component is correctly placed as a direct child */}
      {theme === 'dark' && <Stars />}
      
      <div className="relative z-10">
        <Navbar />
        <div className="container mx-auto px-8">
          <section id="herosection" className="text-center pt-32 pb-20 text-gray-900 dark:text-white">
            <h2 className="text-5xl font-extrabold mb-4">Hello, I'm Uttam</h2>
            <p className="text-xl">A Developer building things for the web.</p>
          </section>

          <About />
          <Skills />
          <Education />
          <Projects />
          <Contact />
        </div>
      </div>
      
      <Footer />
    </div>
  );
}

export default App;