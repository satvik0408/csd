import React from 'react';
import { Link } from 'react-router-dom';

export default function APComputerScienceA() {
  const units = [
    {
      title: "Java Fundamentals",
      description: "Introduction to Java syntax and basic programming concepts",
      lessons: 6,
      duration: "3 hours"
    },
    {
      title: "Object-Oriented Programming",
      description: "Classes, objects, inheritance, and polymorphism",
      lessons: 7,
      duration: "3.5 hours"
    },
    {
      title: "Arrays and ArrayLists",
      description: "Working with data collections in Java",
      lessons: 5,
      duration: "2.5 hours"
    },
    {
      title: "Recursion",
      description: "Understanding recursive methods and algorithms",
      lessons: 4,
      duration: "2 hours"
    },
    {
      title: "Searching and Sorting",
      description: "Implementing and analyzing algorithms",
      lessons: 5,
      duration: "2.5 hours"
    },
    {
      title: "AP Exam Practice",
      description: "Multiple-choice and free-response question strategies",
      lessons: 6,
      duration: "4 hours"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 p-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/learn/advanced" className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-6">
          ← Back to Advanced Courses
        </Link>
        
        <div className="flex items-center gap-6 mb-8">
          <div className="w-16 h-16 rounded-xl bg-blue-100 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div>
            <h1 className="text-3xl font-bold text-blue-900">AP Computer Science A</h1>
            <p className="text-blue-700">Java programming and object-oriented concepts for the AP CSA exam</p>
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