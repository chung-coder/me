import React from 'react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "John Doe",
      role: "Project Manager",
      content: "Great developer with excellent problem-solving skills. Always delivers high-quality work on time.",
      image: "/images/testimonials/john.jpg"
    },
    // Add more testimonials
  ];

  return (
    <div className="py-20">
      <h2 className="text-3xl font-bold text-center mb-12">What People Say About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <h3 className="font-semibold">{testimonial.name}</h3>
                <p className="text-gray-600 text-sm">{testimonial.role}</p>
              </div>
            </div>
            <p className="text-gray-700">{testimonial.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials; 