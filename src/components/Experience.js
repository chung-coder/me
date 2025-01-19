import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
  const experiences = [
    {
      company: 'Cloud Mile Inc.',
      companyLink: 'https://mile.cloud/',
      location: 'Taiwan',
      position: 'Cloud Support Engineer',
      period: 'Jun 2023 - Aug 2024',
      description: [
        'Managed and resolved 150+ technical issues across GCP services (VPC, Compute Engine, Cloud Storage, Cloud Armor)',
        'Delivered 24/7 managed cloud services, monitoring Kubernetes clusters, and configuring proactive alerts',
        'Achieved 95% customer satisfaction rate through close collaboration with Google support teams',
        'Developed technical documentation to enhance processes for customers and internal teams'
      ],
      technologies: ['Google Cloud Platform', 'Kubernetes', 'Docker', 'Linux']
    },
    {
      company: 'Microsoft',
      companyLink: 'https://www.microsoft.com/en-us/hub?oneroute=true',
      location: 'Taiwan',
      position: 'Software Engineer Intern',
      period: 'Jul 2021 - Jun 2022',
      description: [
        'Deployed FHIR Server on Kubernetes in a hybrid cloud environment using Azure services',
        'Delivered 20+ engaging experiences on AI, sustainability, and HoloLens',
        'Led a workshop for 100+ students on Azure Face Detection PowerApps',
        'Collaborated with cross-functional teams to implement cloud solutions'
      ],
      technologies: ['Azure', 'Kubernetes', 'React', 'PowerApps']
    }
  ];

  return (
    <div id="experience" className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-gray-900 dark:text-white">
          Work Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300"
            >
              {/* Accent Border */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-primary-light opacity-50 rounded-xl h-1" />
              
              <div className="p-6 sm:p-8">
                {/* Header Section */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <a 
                        href={exp.companyLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xl font-bold text-gray-900 dark:text-white hover:text-primary dark:hover:text-primary-light transition-colors"
                      >
                        {exp.company}
                      </a>
                      <span className="text-sm text-gray-500 dark:text-gray-400 px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded-full">
                        {exp.location}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-primary dark:text-primary-light">
                      {exp.position}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">
                      {exp.period}
                    </p>
                  </div>
                </div>

                {/* Description Section */}
                <div className="mt-6">
                  <ul className="space-y-3">
                    {exp.description.map((point, i) => (
                      <li 
                        key={i}
                        className="text-gray-700 dark:text-gray-300 flex items-start gap-3"
                      >
                        <span className="text-primary dark:text-primary-light mt-1.5">
                          <svg className="w-2 h-2" fill="currentColor" viewBox="0 0 8 8">
                            <circle cx="4" cy="4" r="3" />
                          </svg>
                        </span>
                        <span className="flex-1">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies Section */}
                <div className="flex flex-wrap gap-2 mt-6">
                  {exp.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-sm font-medium bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full"
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
  );
};

export default Experience; 