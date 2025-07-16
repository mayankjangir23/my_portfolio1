import React from 'react';
import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 px-4 border-t border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">
            <span className="text-yellow-400">Mayank Jangir</span>
          </h3>
          <p className="text-gray-400 mb-6">
            Cloud & DevOps Engineer | Building scalable solutions with passion
          </p>
          
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://www.linkedin.com/in/mayank-jangir-65663025a/" 
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="https://github.com/mayankjangir23" 
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={24} />
            </a>
            <a 
              href="mailto:jangidanshu184@gmail.com" 
              className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 transform hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
              Made with <Heart className="w-4 h-4 text-red-500" /> by Mayank Jangir
            </p>
            <p className="text-gray-500 text-xs mt-2">
              © 2024 Mayank Jangir. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}