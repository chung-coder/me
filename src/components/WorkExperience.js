import React from 'react';

const WorkExperience = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">Work Experience</h1>
      <div className="space-y-6">
        {/* Experience Item */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <div className="flex flex-col sm:flex-row justify-between mb-4">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Company Name</h2>
              <p className="text-lg text-gray-600">Software Engineer</p>
            </div>
            <div className="text-gray-500">
              <p>Jan 2020 - Present</p>
            </div>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Developed and maintained web applications using React and Node.js</li>
            <li>Collaborated with cross-functional teams to deliver high-quality software</li>
            <li>Implemented responsive designs and improved application performance</li>
          </ul>
        </div>

        {/* Add more experience items as needed */}
      </div>
    </div>
  );
};

export default WorkExperience; 