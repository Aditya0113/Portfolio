import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

import About from './components/About';
import ScrollToTop from './components/ScrollToTop';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div className="bg-[#0B0C10] min-h-screen text-white selection:bg-cyan-500/30 font-sans">
      <CustomCursor />
      <ScrollToTop />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}

export default App;
