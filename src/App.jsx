import React, { useState } from 'react';
import PageLoader from './components/PageLoader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {/* Full-screen GSAP loader plays once then fades away */}
      <PageLoader onComplete={() => setLoaded(true)} />

      <div style={{ visibility: loaded ? 'visible' : 'hidden' }}>
        <Navbar />
        <Hero />
        <main>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
