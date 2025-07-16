import React from 'react';
import { Mail, Phone, MapPin, Send, Download } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-20 bg-black text-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Get In Touch</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-black rounded-2xl p-6 border-2 border-transparent bg-clip-padding hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Contact Information</h3>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6 text-yellow-400" />
                    <div>
                      <p className="font-medium">Email</p>
                      <a href="mailto:jangidanshu184@gmail.com" className="text-gray-300 hover:text-yellow-400 transition-colors">
                        jangidanshu184@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6 text-yellow-400" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <a href="tel:+918946850511
                      " className="text-gray-300 hover:text-yellow-400 transition-colors">
                        +918946850511
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <MapPin className="w-6 h-6 text-yellow-400" />
                    <div>
                      <p className="font-medium">Location</p>
                      <p className="text-gray-300">Jaipur, Rajasthan, India</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Resume Download */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-black rounded-2xl p-6 border-2 border-transparent bg-clip-padding hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Resume</h3>
                
                <div className="space-y-4">
                  <p className="text-gray-300">
                    Download my resume to learn more about my experience, skills, and projects.
                  </p>
                  
                  <button className="w-full bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    Download Resume (PDF)
                  </button>
                  
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-sm text-gray-400 mb-4">
                      Want to discuss a project or opportunity?
                    </p>
                    <button className="w-full bg-transparent border-2 border-yellow-400 text-yellow-400 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}