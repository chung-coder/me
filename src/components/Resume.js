import React from 'react';

const Resume = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl sm:text-4xl font-bold mb-8 text-gray-900">Resume</h1>
      <div className="bg-white shadow-lg rounded-lg p-4 sm:p-6 lg:p-8">
        {/* Download Resume Button */}
        <div className="mb-8">
          <a
            href="../YenTingChen_CV.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Download Resume
          </a>
        </div>

        {/* Resume Preview */}
        <div className="space-y-8">
          {/* Education Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Education</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-gray-200 pl-4">
                <h3 className="text-xl font-semibold">University of Rennes</h3>
                <p className="text-gray-600">Bachelor of Computer Science</p>
                <p className="text-gray-500">2018 - 2022</p>
              </div>
            </div>
          </section>

          {/* Skills Summary Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Technical Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h3 className="font-semibold mb-2">Programming Languages</h3>
                <p className="text-gray-700">JavaScript, Python, Java</p>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Frameworks & Libraries</h3>
                <p className="text-gray-700">React, Node.js, Express</p>
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section>
            <h2 className="text-2xl font-bold mb-4 text-gray-900">Certifications</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-700">
              <li>AWS Certified Developer</li>
              <li>Google Cloud Professional</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Resume; 