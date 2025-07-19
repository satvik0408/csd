import React from 'react';
import { Link } from 'react-router-dom';

export default function WebDevPrimer() {
  const units = [
    {
      title: "Web Development Fundamentals",
      description: "Understanding how the web works",
      lessons: 3,
      duration: "1 hour"
    },
    {
      title: "Developer Tools",
      description: "Setting up your development environment",
      lessons: 4,
      duration: "1.5 hours"
    },
    {
      title: "HTML5 Essentials",
      description: "Modern semantic HTML structure",
      lessons: 4,
      duration: "1.5 hours"
    },
    {
      title: "CSS3 Styling",
      description: "Modern styling techniques and layouts",
      lessons: 5,
      duration: "2 hours"
    },
    {
      title: "Responsive Design",
      description: "Making sites work on all devices",
      lessons: 4,
      duration: "1.5 hours"
    },
    {
      title: "Basic JavaScript for Web",
      description: "Adding interactivity to your pages",
      lessons: 5,
      duration: "2 hours"
    },
    {
      title: "Web Performance",
      description: "Optimizing your websites",
      lessons: 3,
      duration: "1 hour"
    },
    {
      title: "Deployment Basics",
      description: "Getting your site online",
      lessons: 3,
      duration: "1.5 hours"
    },
    {
      title: "Final Project",
      description: "Build and deploy a complete website",
      lessons: 4,
      duration: "3 hours"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 p-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/learn/beginner" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-6">
          ← Back to Beginner Courses
        </Link>
        
        <div className="flex items-center gap-6 mb-8">
          <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-blue-900">Web Dev Essentials</h1>
            <p className="text-blue-700">Everything you need to start building modern websites</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {units.map((unit, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-50 text-blue-600 font-bold rounded-lg w-10 h-10 flex items-center justify-center shrink-0 mt-1">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-blue-900 mb-1">{unit.title}</h3>
                    <p className="text-blue-700/80 mb-3">{unit.description}</p>
                    <div className="flex items-center text-sm text-blue-500 gap-4">
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {unit.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                        </svg>
                        {unit.lessons} lessons
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}