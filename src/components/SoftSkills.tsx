import React from 'react';
import { MessageCircle, Users, Clock, Brain, Globe, Languages } from 'lucide-react';

export default function SoftSkills() {
  const softSkills = [
    {
      title: "Fluent Communication",
      icon: <MessageCircle className="w-8 h-8" />,
      description: "Fluent and confident verbal communicator",
      emoji: "🗣️"
    },
    {
      title: "Team Collaboration",
      icon: <Users className="w-8 h-8" />,
      description: "Collaborative and empathetic team player",
      emoji: "🤝"
    },
    {
      title: "Deadline Management",
      icon: <Clock className="w-8 h-8" />,
      description: "Meets deadlines with consistency and precision",
      emoji: "⏱️"
    },
    {
      title: "Quick Learning",
      icon: <Brain className="w-8 h-8" />,
      description: "Quick learner — adapts to tools, technologies, and methodologies swiftly",
      emoji: "🧠"
    },
    {
      title: "Adaptability",
      icon: <Globe className="w-8 h-8" />,
      description: "Flexible and adaptive to new environments and challenges",
      emoji: "🌍"
    },
    {
      title: "Global Communication",
      icon: <Languages className="w-8 h-8" />,
      description: "Currently learning Japanese 🇯🇵 and Spanish 🇪🇸 for global communication and outreach",
      emoji: "🌐"
    }
  ];

  return (
    <section className="py-20 bg-black text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-yellow-400">Soft Skills</h2>
        <p className="text-center text-gray-300 mb-12 text-lg">
          An effective engineer is more than just technical. Here are a few key interpersonal strengths I bring to the table:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {softSkills.map((skill, index) => (
            <div key={index} className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-black rounded-2xl p-6 border-2 border-transparent bg-clip-padding hover:transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
                <div className="text-center">
                  <div className="text-yellow-400 mb-4 flex justify-center">{skill.icon}</div>
                  <div className="text-3xl mb-3">{skill.emoji}</div>
                  <h3 className="text-xl font-semibold mb-3 text-yellow-400">{skill.title}</h3>
                  <p className="text-gray-300 leading-relaxed flex-grow">{skill.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}