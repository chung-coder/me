import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Skills = () => {
  const skills = [
    { name: 'GCP', icon: '/images/icons/gcp.png' },
    { name: 'Azure', icon: '/images/icons/azure.png' },
    { name: 'Kubernetes', icon: '/images/icons/kubernetes.png' },
    { name: 'Java', icon: '/images/icons/java.png' },
    { name: 'Python', icon: '/images/icons/python.webp' },
    { name: 'Django', icon: '/images/icons/django.svg' },
    { name: 'JavaScript', icon: '/images/icons/javascript.png' },
    { name: 'React', icon: '/images/icons/react.png' },
    { name: 'MySQL', icon: '/images/icons/mysql.png' },
    { name: 'PostgreSQL', icon: '/images/icons/postgresql.png' },
    { name: 'Git', icon: '/images/icons/git.png' },
    { name: 'Docker', icon: '/images/icons/docker.webp' },
  ];

  return (
    <div id="skills" className="py-16">
      <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technologies I Work With
          </h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8 md:gap-10">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-4 rounded-lg"
            >
              <LazyLoadImage
                src={`${process.env.PUBLIC_URL}${skill.icon}`}
                alt={skill.name}
                effect="blur"
                className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 mb-3 dark:filter dark:brightness-90"
              />
              <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills; 