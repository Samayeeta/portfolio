import './App.css';
import Header     from './Header';
import Hero       from './Hero';
import About      from './About';
import Skills     from './Skills';
import Projects   from './Projects';
import Experience from './Experience';
import Contact    from './Contact';
import Footer     from './Footer';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => { AOS.init({ duration: 800, once: true }); }, []);
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}

export default App;