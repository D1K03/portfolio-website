import { useRef } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Background from './components/Background';
import Footer from './components/Footer';

function App(): React.ReactElement {
  const contactRef = useRef<HTMLElement>(null);

  const scrollToContact = (): void => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="dark min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero scrollToContact={scrollToContact} />
        <Experience />
        <Projects />
        <Background />
      </main>
      <Footer ref={contactRef} />
    </div>
  );
}

export default App;
