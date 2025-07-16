import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import SoftSkills from './components/SoftSkills';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import ContactForm from './components/ContactForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Hero />
      <About />
      <SoftSkills />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <ContactForm />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;