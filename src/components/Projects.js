import React from 'react';
import { motion } from 'framer-motion';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Projects = () => {
  const projects = [
    {
      title: "AI Writing Companions",
      description: "An AI-powered platform helping elementary students improve Chinese writing skills through:",
      keyPoints: [
        "Interactive GPT-4 conversations for real-time feedback",
        "Progress tracking with diary statistics",
        "Personalized writing prompts and guidance"
      ],
      image: "/images/projects/writing.jpg",
      imagePosition: "center",
      technologies: ["React", "Django", "MySQL"],
    },
    {
      title: "Mini Text Editor",
      description: "A command-line text editor built with design patterns featuring:",
      keyPoints: [
        "Essential text operations (copy, cut, paste)",
        "Undo/Redo functionality",
        "Command recording and replay"
      ],
      image: "/images/projects/editor.jpg",
      imagePosition: "center",
      technologies: ["Java", "Maven", "JUnit", "Git"],
      liveLink: "https://chung-coder.github.io/ACO-Editor/",
      githubLink: "https://github.com/chung-coder/ACO-Editor"
    },
    {
      title: "EMR System",
      description: "A streamlined Electronic Medical Record system that:",
      keyPoints: [
        "Simplifies patient data management",
        "Improves healthcare efficiency",
        "Reduces operational costs"
      ],
      image: "/images/projects/emr.jpeg",
      imagePosition: "center",
      technologies: ["Java", "MySQL", "Git"],
      // liveLink: "https://github.com/chung-coder/EMR_system_MISSA",
      githubLink: "https://github.com/chung-coder/EMR_system_MISSA"
    },
    {
      title: "Talkversity",
      description: "An AI-powered presentation preparation tool that analyzes:",
      keyPoints: [
        "Voice patterns and tone",
        "Facial expressions",
        "Speech content and delivery"
      ],
      image: "/images/projects/talkversity.jpg",
      imagePosition: "center",
      technologies: ["React", "JavaScript"],
      liveLink: "https://youtu.be/AxzI3nR-iVY?si=6XPdbpXi9bdXl6yT",
      githubLink: "https://github.com/chung-coder/Talkversity"
    },
    {
      title: "IoT-bartender",
      description: "An innovative AI bartender project featuring:",
      keyPoints: [
        "Automated bartender device",
        "Age verification system",
        "Custom cocktail recipes"
      ],
      image: "/images/projects/circuit-design.jpg",
      imagePosition: "center",
      technologies: ["Raspberry Pi", "Python 3.7", "Open-Vino", "Python Telegram Bot"],
      liveLink: "https://youtu.be/BHtmUCMAgPI?si=rJfayh-vFdJ-utqz",
      githubLink: "https://github.com/chung-coder/Iot-bartender/"
    }
  ];

  return (
    <div id="projects" className="py-16">
      <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="pl-4 sm:pl-8 lg:pl-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300">
              Here are some of my notable projects that showcase my skills and experience
            </p>
          </div>

          <div className="space-y-20">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
              >
                {/* Project Image */}
                <div className={`relative aspect-[16/9] ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                  <LazyLoadImage
                    src={`${process.env.PUBLIC_URL}${project.image}`}
                    alt={project.title}
                    effect="blur"
                    wrapperClassName="w-full h-full"
                    className={`rounded-xl w-full h-full object-cover shadow-lg
                      ${project.imagePosition === 'center' ? 'object-center' : 'object-top'}`}
                  />
                  <div className="absolute inset-0 bg-gray-900 opacity-0 hover:opacity-75 transition-opacity duration-300 rounded-xl flex items-center justify-center space-x-4">
                    {project.liveLink && (
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary-light p-2 transition-colors"
                      >
                        <span className="sr-only">Live Demo</span>
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm-1 15v-4H7l5-7v4h4l-5 7z"/>
                        </svg>
                      </a>
                    )}
                    {project.githubLink && (
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white hover:text-primary-light p-2 transition-colors"
                      >
                        <span className="sr-only">View Code</span>
                        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1 .07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
                        </svg>
                      </a>
                    )}
                  </div>
                </div>

                {/* Project Info */}
                <div className={index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <ul className="list-disc list-inside space-y-2 mb-6 text-gray-600 dark:text-gray-300">
                    {project.keyPoints.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 