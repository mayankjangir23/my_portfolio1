import React from 'react';
import { Building, Calendar, MapPin } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      title: "DevOps & Full Stack Intern",
      company: "Linux World",
      duration: "60 days",
      location: "GD Badaya auditorium, mansrovar, Jaipur",
      description: "Worked extensively with Docker, Jenkins, and Python to deploy real-world automation tools. Gained hands-on experience with containerization, CI/CD pipelines, and infrastructure automation through immersive project-based learning.",
      achievements: [
        "Built and deployed multiple Docker containers for web applications",
        "Created automated CI/CD pipelines using Jenkins",
        "Developed Python automation scripts for infrastructure management"
      ]
    },
    {
      title: "AWS Cloud Intern",
      company: "REGEX Software Services",
      duration: "60 days",
      location: "GopalPura bypass, Jaipur",
      description: "Built a comprehensive real-time Helmet Detection System using various AWS services. Applied cloud computing principles in live deployment scenarios with focus on scalability and security.",
      achievements: [
        "Implemented real-time helmet detection using EC2 and Lambda",
        "Managed data storage and retrieval with S3 buckets",
        "Configured IAM roles and policies for secure access control"
      ]
    },
    {
      title: "AWS Cloud Practitioner Labs",
      company: "AWS Skill Builder",
      duration: "3 days",
      location: "Online",
      description: "Hands-on experience with IAM, EC2, Auto Scaling, Monitoring, and various deployment scenarios. Completed multiple lab exercises focusing on real-world AWS implementations.",
      achievements: [
        "Mastered IAM user and role management",
        "Deployed scalable applications using EC2 and Auto Scaling",
        "Implemented monitoring solutions with CloudWatch"
      ]
    },
    {
      title: "Frontend Developer Intern",
      company: "Reboot Cell",
      duration: "30 days",
      location: "Pratap Nagar, murlipura, Jaipur",
      description: "Created a comprehensive multi-page HTML/CSS camera-themed website during early engineering phase. Focused on responsive design and user experience optimization.",
      achievements: [
        "Developed responsive multi-page website from scratch",
        "Implemented modern CSS techniques and animations",
        "Optimized for mobile and desktop viewing experiences"
      ]
    }
  ];

  return (
    <section className="py-20 bg-black text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">Professional Experience</h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400"></div>
              <div className="ml-8 relative">
                <div className="absolute -left-10 top-6 w-4 h-4 bg-yellow-400 rounded-full"></div>
                <div className="bg-gray-900 rounded-2xl p-6 border-l-4 border-yellow-400 hover:transform hover:scale-105 transition-all duration-300">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <h3 className="text-xl font-semibold text-yellow-400">{exp.title}</h3>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Building size={16} />
                      <span>{exp.company}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{exp.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="font-semibold text-white">Key Achievements:</h4>
                    <ul className="space-y-1">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="text-gray-300 flex items-start gap-2">
                          <span className="text-yellow-400 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
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
