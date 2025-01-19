import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const experiences = [
    {
      company: 'Cloud Mile Inc.',
      companyLink: 'https://mile.cloud/',
      location: 'Taiwan',
      position: 'Cloud Support Engineer',
      period: 'Jun 2023 - Aug 2024',
      technologies: ['Google Cloud Platform', 'Kubernetes', 'Docker']
    },
    {
      company: 'Microsoft',
      companyLink: 'https://www.microsoft.com/en-us/hub?oneroute=true',
      location: 'Taiwan',
      position: 'Software Engineer Intern',
      period: 'Jul 2021 - Jun 2022',
      technologies: ['Azure', 'Kubernetes', 'Python', 'React']
    }
  ];

  return (
    <div id="about" className="py-16">
      <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16">
        {/* First Section: About Me + Photo */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-24">
          <div className="pl-4 sm:pl-8 lg:pl-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-6">
              About Me
            </h2>
            <div className="space-y-4">
              <p className="text-lg text-gray-600 dark:text-gray-300">
                I'm Ting-Chen, a problem-solver at heart and a certified cloud enthusiast by trade.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                My journey began in Taiwan 🇹🇼, where I studied Information Management, and it's taken me to France 🇫🇷 and Finland 🇫🇮, where I'm pursuing a dual Master's in Cloud and Network Infrastructures.
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                My passion lies in creating practical, scalable solutions using cloud technologies to solve real-world problems.
              </p>
            </div>
          </div>

          <motion.div 
            className="w-64 sm:w-72 mx-auto lg:mx-0 lg:mt-[52px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="relative aspect-square">
              <img
                src={`${process.env.PUBLIC_URL}/images/me.png`}
                alt="Ting-Chen Yen"
                className="rounded-2xl w-full h-full object-cover object-center shadow-lg transition-transform duration-300"
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-black/10 dark:ring-white/10"></div>
            </div>
          </motion.div>
        </div>

        {/* Second Section: Experience + Education */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="pl-4 sm:pl-8 lg:pl-12">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Education
            </h3>
            <div className="space-y-8">
              <div className="relative pl-6 border-l-2 border-primary">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                <h4 className="font-medium text-gray-900 dark:text-white text-lg">
                  Master of Computer Science
                </h4>
                <h4 className="font-medium text-gray-900 dark:text-white text-lg">
                  Specializing in Cloud and Network Infrastructures
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  Aalto University • Université de Rennes
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  2024-2026
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-primary">
                <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                <h4 className="font-medium text-gray-900 dark:text-white text-lg">
                  Bachelor of Information Management
                </h4>
                <p className="text-gray-600 dark:text-gray-400 mt-1">
                  National Central University
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">
                  2018-2023
                </p>
              </div>
            </div>
          </div>

          {/* Work Experience */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Work Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-6 border-l-2 border-primary">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[7px] top-2"></div>
                  <div>
                    <div className="flex items-center gap-3 flex-wrap">
                      <a 
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-medium text-gray-900 dark:text-white text-lg hover:text-primary dark:hover:text-primary-light"
                      >
                        {exp.company}
                      </a>
                      <span className="text-sm text-gray-500 dark:text-gray-400 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                        {exp.location}
                      </span>
                    </div>
                    <p className="text-primary dark:text-primary-light mt-1">
                      {exp.position}
                    </p>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {exp.period}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {exp.technologies.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About; 