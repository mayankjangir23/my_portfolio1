import React from 'react';
import { Code, Cloud, Database, GitBranch, Server, Cpu, Monitor, Terminal } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-8 h-8" />,
      skills: ["Java", "C", "C++", "Python", "JavaScript"]
    },
    {
      title: "Frontend Development",
      icon: <Monitor className="w-8 h-8" />,
      skills: ["HTML", "CSS", "React", "Tailwind CSS"]
    },
    {
      title: "Linux & CLI",
      icon: <Terminal className="w-8 h-8" />,
      skills: ["Shell Scripting", "CLI Tools", "System Administration"]
    },
    {
      title: "DevOps Tools",
      icon: <GitBranch className="w-8 h-8" />,
      skills: ["Docker", "Kubernetes", "Jenkins", "GitBash", "CI/CD"]
    },
    {
      title: "AWS Services",
      icon: <Cloud className="w-8 h-8" />,
      skills: ["EC2", "Lambda", "S3", "VPC", "IAM", "CloudWatch", "Auto Scaling"]
    },
    {
      title: "ML/AI Technologies",
      icon: <Cpu className="w-8 h-8" />,
      skills: ["NumPy", "Pandas", "Scikit-learn", "XGBoost", "Machine Learning"]
    }
  ];

  return (
    <section className="py-20 bg-black text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Skills & Technologies</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-black rounded-2xl p-6 border-2 border-transparent bg-clip-padding hover:transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
                <div className="text-yellow-400 mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold mb-4 text-yellow-400">{category.title}</h3>
                <div className="flex flex-wrap gap-2 flex-grow">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="bg-gray-800 text-white px-3 py-1 rounded-full text-sm border border-gray-700 hover:border-yellow-400 transition-colors duration-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}