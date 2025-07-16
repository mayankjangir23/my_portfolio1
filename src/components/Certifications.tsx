import React from 'react';
import { Award, CheckCircle, Cloud, Code, Monitor, Coffee } from 'lucide-react';

export default function Certifications() {
  const certifications = [
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      icon: <Cloud className="w-8 h-8" />,
      date: "2024",
      description: "Foundational understanding of AWS cloud services, architecture, and best practices"
    },
    {
      title: "Linux World MultiTech Certificate",
      issuer: "Linux World",
      icon: <Award className="w-8 h-8" />,
      date: "2024",
      description: "Comprehensive training in DevOps tools and practices including Docker, Jenkins, and automation"
    },
    {
      title: "Cloud Computing with AWS",
      issuer: "REGEX Software Services",
      icon: <Cloud className="w-8 h-8" />,
      date: "2024",
      description: "Hands-on experience with AWS services in real-world deployment scenarios"
    },
    {
      title: "Frontend Web Development",
      issuer: "Reboot Cell",
      icon: <Monitor className="w-8 h-8" />,
      date: "2023",
      description: "Modern web development techniques including responsive design and user experience"
    },
    {
      title: "Java Programming",
      issuer: "Apna College",
      icon: <Coffee className="w-8 h-8" />,
      date: "2023",
      description: "Object-oriented programming principles and Java application development"
    }
  ];

  return (
    <section className="py-20 bg-black text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Certifications & Achievements</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div key={index} className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-2xl p-6 border-2 border-transparent bg-clip-padding hover:transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
                <div className="text-center">
                  <div className="text-yellow-500 mb-4 flex justify-center">{cert.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-black">{cert.title}</h3>
                  <p className="text-gray-600 font-medium mb-2">{cert.issuer}</p>
                  <p className="text-yellow-500 font-semibold mb-3">{cert.date}</p>
                  <p className="text-gray-700 text-sm leading-relaxed flex-grow">{cert.description}</p>
                  <div className="mt-4 flex justify-center">
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}