import React from 'react';
import { ExternalLink, Github, Cpu, GitBranch, Globe, Container, Heart, Cloud, Hand, Gamepad2 } from 'lucide-react';

export default function Projects() {
  const projects = [
    // Original Projects
    {
      title: "AI-Powered MCQ Game using Gemini & Docker",
      icon: <Cpu className="w-8 h-8" />,
      description: "Built a sophisticated Dockerized MCQ quiz application powered by Gemini AI that provides contextual learning experiences. The application features user authentication, dynamic question generation, and modular architecture for easy expansion.",
      solution: "Implemented containerized deployment with Docker, integrated Gemini AI API for intelligent question generation, and created a scalable architecture that supports multiple quiz categories and difficulty levels.",
      tech: ["Python", "Docker", "Gemini API", "Flask", "SQLite"],
      github: "https://github.com/mayankjangir23/Docker_game",
      demo: "https://ai-mcq-game.demo.com",
      type: "original"
    },
    {
      title: "CI/CD Pipeline with Jenkins",
      icon: <GitBranch className="w-8 h-8" />,
      description: "Designed and implemented a complete CI/CD pipeline that automatically triggers on Git commits, providing seamless integration between development and deployment phases. The pipeline includes automated testing, code quality checks, and deployment strategies.",
      solution: "Created a robust pipeline using Jenkins with GitHub webhooks, implemented automated testing suites, and established deployment protocols that ensure zero-downtime deployments with rollback capabilities.",
      tech: ["Jenkins", "GitHub", "Bash", "Docker", "Nginx"],
      github: "https://github.com/mayankjangir23/jenkins-cicd",
      demo: "https://jenkins-pipeline.demo.com",
      type: "original"
    },
    {
      title: "Static Web Hosting via Docker",
      icon: <Globe className="w-8 h-8" />,
      description: "Developed a containerized solution for hosting static websites using Docker, providing a lightweight and portable web hosting environment. The solution includes custom nginx configuration and SSL support.",
      solution: "Built custom Docker images with optimized nginx configurations, implemented automated SSL certificate management, and created deployment scripts for multiple hosting environments.",
      tech: ["Docker", "Nginx", "HTML", "CSS", "Let's Encrypt"],
      github: "https://github.com/mayankjangir23/docker-static-hosting",
      demo: "https://static-hosting.demo.com",
      type: "original"
    },
    {
      title: "Docker-in-Docker Setup",
      icon: <Container className="w-8 h-8" />,
      description: "Created a sophisticated sandbox environment that enables running Docker containers within Docker containers (DinD). This setup provides isolated development environments for testing containerized applications.",
      solution: "Implemented secure DinD configuration with proper volume mounting, network isolation, and resource management. Created automated setup scripts and documentation for easy deployment across different environments.",
      tech: ["Docker", "Docker Compose", "Linux", "Shell Scripting"],
      github: "https://github.com/mayankjangir23/docker-in-docker",
      demo: "https://dind-setup.demo.com",
      type: "original"
    },
    {
      title: "Python Multi-Tool Automation with Gradio UI",
      icon: <Cpu className="w-8 h-8" />,
      description: "Built a comprehensive automation platform with an intuitive Gradio-based user interface that combines messaging, image processing, social media posting, and Linux command execution capabilities.",
      solution: "Developed a modular Python application with Gradio UI, integrated multiple APIs (Twilio, OpenCV, social media APIs), and created a secure command execution environment with proper error handling and logging.",
      tech: ["Python", "Gradio", "Twilio", "OpenCV", "Linux", "API Integration"],
      github: "https://github.com/mayankjangir23/python_tasks_for_automation",
      demo: "https://automation-tool.demo.com",
      type: "original"
    },
    // New Projects
    {
      title: "🌸 Gemini Pocket Therapist — A Cozy AI Mood-Booster",
      icon: <Heart className="w-8 h-8" />,
      description: "A comforting AI tool designed to gently lift your mood through creative and psychologically grounded suggestions. Accepts your current mood, preferences, and personality traits, then sends a structured prompt to Gemini LLM to return 5 cozy, kind, and science-backed suggestions.",
      solution: "Built with Gradio UI featuring intuitive textboxes, buttons, and state storage. Integrated Gemini-compatible API with custom prompt engineering for therapeutic responses. Implemented reusability logic with reload state management for personalized comfort in moments of stress.",
      tech: ["Gradio", "Gemini API", "Python", "OpenAI-compatible"],
      features: [
        "Personalized mood improvement suggestions",
        "Reload Suggestions feature using previous input",
        "Grounded in real emotional science",
        "Bridges psychological support and AI warmth"
      ],
      planned: [
        "Voice input/output",
        "Mood journaling and emotional graphs",
        "Chat therapy mode",
        "Spotify/YouTube calming media suggestions",
        "React Native/Flutter mobile version"
      ],
      github: "https://github.com/mayankjangir23/The_cozy_therapist",
      demo: "https://gemini-therapist.demo.com",
      type: "new"
    },
    {
      title: "☁️ AWS-Based Duplicate File Removal System",
      icon: <Cloud className="w-8 h-8" />,
      description: "This cloud automation system detects and removes duplicate files in an S3 bucket, ensuring optimized cloud storage and cost-efficiency. Features automated trigger-based scanning of new file uploads with intelligent duplicate detection.",
      solution: "Implemented serverless architecture using AWS Lambda for duplicate detection logic, S3 for storage management, SNS for real-time notifications on deletion events, and CloudWatch for comprehensive monitoring and event tracking.",
      tech: ["AWS Lambda", "S3", "SNS", "CloudWatch", "Python"],
      features: [
        "Automated trigger-based scanning of new uploads",
        "Lambda-based logic to detect duplicate file hashes",
        "SNS notifications on deletion",
        "CloudWatch monitoring for event tracking",
        "Cost-efficient cloud storage optimization"
      ],
      github: "https://github.com/mayankjangir23/aws-duplicate-remover",
      demo: "https://aws-duplicate-system.demo.com",
      type: "new"
    },
    {
      title: "🎥 Hand Gesture Controlled YouTube & Volume Controller",
      icon: <Hand className="w-8 h-8" />,
      description: "Control YouTube playback and system volume with simple hand gestures via your webcam. Features real-time gesture detection with intelligent state management to prevent gesture conflicts.",
      solution: "Developed using OpenCV for computer vision, MediaPipe for hand tracking, PyAutoGUI for system automation, and Pycaw for Windows volume control. Implemented gesture recognition with conflict resolution and smooth state transitions.",
      tech: ["Python", "OpenCV", "MediaPipe", "PyAutoGUI", "Pycaw"],
      features: [
        "🖐️ Five fingers up → Open YouTube",
        "✊ Closed fist → Close YouTube tab",
        "✌️ 2 fingers → 40% Volume",
        "👌 3 fingers → 60% Volume",
        "🖐️ 4 fingers → 100% Volume"
      ],
      notes: "Originally used pinch in/out gestures for volume control but replaced them due to gesture conflicts. Future features in development.",
      github: "https://github.com/mayankjangir23/hand_gestured_controlled_-youtube",
      demo: "https://gesture-controller.demo.com",
      type: "new"
    },
    {
      title: "🎮 Java-Based Pacman Game",
      icon: <Gamepad2 className="w-8 h-8" />,
      description: "A clean and engaging recreation of the classic Pacman game using Java Swing and object-oriented design. Perfect for understanding Java event handling, game loops, collision detection, and GUI fundamentals.",
      solution: "Built using Java Swing for UI rendering with modular, maintainable code structure. Implemented classic gameplay mechanics including food collection, ghost AI with random movement patterns, score tracking, and smooth keyboard navigation.",
      tech: ["Java", "Java Swing", "OOP", "Event Handling"],
      features: [
        "Classic gameplay with food collection and ghost dodging",
        "Randomly moving animated ghosts (red, pink, blue, orange)",
        "Score tracking and lives counter",
        "Keyboard arrow key navigation",
        "Game Over and Restart screen",
        "Smooth UI rendering using Java Swing"
      ],
      bonus: "Perfect for understanding Java event handling, game loops, collision detection, and GUI fundamentals.",
      github: "https://github.com/mayankjangir23/java-pacman",
      demo: "https://java-pacman.demo.com",
      type: "new"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-black text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-yellow-400">💼 Featured Projects</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="relative group h-full">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 rounded-2xl blur-sm opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative bg-black rounded-2xl p-6 border-2 border-transparent bg-clip-padding hover:transform hover:scale-105 transition-all duration-300 h-full flex flex-col">
                <div className="border-l-4 border-yellow-400 pl-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="text-yellow-400">{project.icon}</div>
                    <h3 className="text-xl font-semibold text-yellow-400">{project.title}</h3>
                  </div>
                  
                  <div className="space-y-4 flex-grow">
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        {project.type === 'new' ? '🧠 What It Does:' : 'Problem & Approach:'}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">{project.description}</p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        {project.type === 'new' ? '⚙️ Key Components:' : 'Solution & Implementation:'}
                      </h4>
                      <p className="text-gray-300 leading-relaxed">{project.solution}</p>
                    </div>
                    
                    {project.features && (
                      <div>
                        <h4 className="font-semibold text-white mb-2">✨ Features:</h4>
                        <ul className="space-y-1">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="text-gray-300 flex items-start gap-2">
                              <span className="text-yellow-400 mt-1">•</span>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {project.planned && (
                      <div>
                        <h4 className="font-semibold text-white mb-2">🔮 Planned Additions:</h4>
                        <ul className="space-y-1">
                          {project.planned.map((plan, planIndex) => (
                            <li key={planIndex} className="text-gray-300 flex items-start gap-2">
                              <span className="text-yellow-400 mt-1">•</span>
                              {plan}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {project.notes && (
                      <div>
                        <h4 className="font-semibold text-white mb-2">💡 Notes:</h4>
                        <p className="text-gray-300 leading-relaxed">{project.notes}</p>
                      </div>
                    )}
                    
                    {project.bonus && (
                      <div>
                        <h4 className="font-semibold text-white mb-2">💡 Bonus:</h4>
                        <p className="text-gray-300 leading-relaxed">{project.bonus}</p>
                      </div>
                    )}
                    
                    <div>
                      <h4 className="font-semibold text-white mb-2">
                        {project.type === 'new' ? '🛠️ Tech Stack:' : 'Tech Stack:'}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, techIndex) => (
                          <span 
                            key={techIndex}
                            className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* See Code Button */}
                    <div className="mt-6">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition-colors duration-300 transform hover:scale-105"
                      >
                        <Github className="w-4 h-4" />
                        See Code
                      </a>
                    </div>
                    
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