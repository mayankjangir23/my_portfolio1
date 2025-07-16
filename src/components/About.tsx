import React from 'react';

export default function About() {
  return (
    <section className="py-20 bg-black text-white px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">About Me</h2>
        
        <div className="relative group">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
          <div className="relative bg-black rounded-2xl p-8 border-2 border-transparent bg-clip-padding hover:transform hover:scale-105 transition-all duration-300">
            <div className="text-lg leading-relaxed space-y-6">
              <p>
                I'm a final-year B.Tech student at <span className="text-yellow-400 font-semibold">Poornima College of Engineering</span> with a strong passion for DevOps tools, cloud infrastructure, and AI-driven automation. 
                My journey in technology is driven by a love for building scalable systems that eliminate manual processes and maximize efficiency.
              </p>
              
              <p>
                I've worked on a variety of projects that showcase my ability to containerize applications, automate deployments, and design intelligent tools using modern technologies like <span className="text-yellow-400">Docker, Jenkins, AWS, and Python</span>. 
                My experience spans from building CI/CD pipelines to deploying machine learning models in production environments.
              </p>
              
              <p>
                I thrive in fast-paced environments where I can learn continuously, improve constantly, and deliver smart, functional solutions that make a real-world impact. 
                My goal is to bridge the gap between development and operations while leveraging cloud technologies to create robust, scalable solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}