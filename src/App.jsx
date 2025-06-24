import React, {useRef} from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'
import Contact from './components/Contact'

function App() {

  const contactRef = useRef(null);

  const scrollToContact = () => {
    if (contactRef.current) {
      contactRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero scrollToContact={scrollToContact} />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Contact ref={contactRef} />
      </main>
      <Footer />
    </div>
  )
}

export default App

