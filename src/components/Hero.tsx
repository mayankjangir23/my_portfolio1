import React from 'react';
import { Github, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-4 relative overflow-hidden">
      {/* Diagonal Flowing Lines Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="flowing-lines">
          {Array.from({ length: 25 }).map((_, i) => (
            <div
              key={i}
              className="diagonal-line"
            />
          ))}
        </div>
      </div>

      <div className="text-center max-w-4xl mx-auto relative z-10">
        {/* Profile Picture */}
        <div className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 p-1">
            <div className="w-full h-full rounded-full bg-black flex items-center justify-center">
              <img 
                src="/profile-pic.jpg" 
                alt="Profile"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-bold mb-4">
          Hello, I'm <span className="text-yellow-400">Mayank Jangir</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-2 text-gray-300">
          Building the Future with <span className="text-yellow-400">Cloud & DevOps</span>
        </p>

        {/* Hero Summary */}
        <div className="mb-6">
          <p className="text-lg md:text-xl text-gray-400 mb-4">
            Cloud & DevOps Engineer | Automating Real-World Workflows with AI & AWS
          </p>
          <p className="text-base md:text-lg text-gray-400 italic">
            Automating ideas into deployable, scalable, and intelligent solutions with Cloud + DevOps
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a 
            href="https://www.linkedin.com/in/mayank-jangir-65663025a/" 
            className="text-white hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={32} />
          </a>
          <a 
            href="https://github.com/mayankjangir23" 
            className="text-white hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github size={32} />
          </a>
          <a 
            href="mailto:jangidanshu184@gmail.com" 
            className="text-white hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
          >
            <Mail size={32} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105" onClick={scrollToProjects}>
            View My Projects
          </button>
          <a
            href="/resume.pdf"
            download
            className="bg-transparent border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            Download Resume
          </a>
          <button 
            onClick={scrollToContact}
            className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 cursor-pointer"
          >
            Let's Connect
          </button>
        </div>
      </div>
    </section>
  );
}