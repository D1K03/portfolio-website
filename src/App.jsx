import React, { useRef } from 'react';
import './App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Footer from './components/Footer';

function App() {
  const contactRef = useRef(null);

  const scrollToFooter = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero scrollToFooter={scrollToFooter} />
        <Experience />
        <Projects />
        <Skills />
        <Education />
      </main>
      <Footer ref={contactRef} />
    </div>
  );
}

export default App;
