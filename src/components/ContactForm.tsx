import React, { useState } from 'react';
import { Send, User, Mail, MessageSquare, CheckCircle } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend or email service
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ fullName: '', email: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact-form" className="py-20 bg-black text-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-yellow-400">Let's Work Together</h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you!
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-6">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-black rounded-2xl p-8 border-2 border-transparent bg-clip-padding hover:transform hover:scale-105 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Full Name</p>
                      <p className="text-gray-300">Mayank Jangir</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Email Address</p>
                      <a 
                        href="mailto:jangidanshu184@gmail.com" 
                        className="text-yellow-400 hover:text-yellow-300 transition-colors"
                      >
                        jangidanshu184@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                      <MessageSquare className="w-6 h-6 text-black" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Response Time</p>
                      <p className="text-gray-300">Usually within 24 hours</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative bg-black rounded-2xl p-8 border-2 border-transparent bg-clip-padding hover:transform hover:scale-105 transition-all duration-300">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-semibold mb-6 text-yellow-400">Send Me a Message</h3>
                  
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-white mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition-all duration-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition-all duration-300"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-white mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-50 transition-all duration-300 resize-vertical"
                      placeholder="Tell me about your project or how I can help you..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message
                  </button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold mb-2 text-green-400">Message Sent!</h3>
                  <p className="text-gray-300">
                    Thank you for reaching out. I'll get back to you within 24 hours.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}