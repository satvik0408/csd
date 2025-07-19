import React from 'react';
import { Link } from 'react-router-dom';

export default function Intermediate() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
            Level Up Your Skills
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 leading-tight">
            Intermediate <span className="text-blue-600">Coding Courses</span>
          </h1>
          <p className="text-lg text-blue-700/90 max-w-2xl mx-auto">
            Build on your fundamentals and prepare for AP Computer Science Principles
          </p>
        </div>
        
        {/* Courses Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Course Card 1 */}
          <div className="relative group overflow-hidden bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-8 relative z-10">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-3">AP Computer Science Principles</h2>
              <p className="text-blue-800/80 mb-6">
                Learn computational thinking and prepare for the AP CSP exam with hands-on projects.
              </p>
              <Link 
                to="/learn/ap-csp" 
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white text-blue-600 font-medium border border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all group-hover:shadow-sm"
              >
                Explore Course
              </Link>
            </div>
          </div>

          {/* Course Card 2 */}
          <div className="relative group overflow-hidden bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-8 relative z-10">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-3">Python Programming</h2>
              <p className="text-blue-800/80 mb-6">
                Master Python fundamentals and build practical applications with this versatile language.
              </p>
              <Link 
                to="/learn/python-intermediate" 
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white text-blue-600 font-medium border border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all group-hover:shadow-sm"
              >
                Explore Course
              </Link>
            </div>
          </div>

          {/* Course Card 3 */}
          <div className="relative group overflow-hidden bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="p-8 relative z-10">
              <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-3">Web Development</h2>
              <p className="text-blue-800/80 mb-6">
                Build interactive websites with React, Node.js, and modern JavaScript frameworks.
              </p>
              <Link 
                to="/learn/web-dev-intermediate" 
                className="inline-flex items-center px-5 py-2.5 rounded-lg bg-white text-blue-600 font-medium border border-blue-200 hover:bg-blue-50 hover:border-blue-300 transition-all group-hover:shadow-sm"
              >
                Explore Course
              </Link>
            </div>
          </div>
        </div>

        {/* Back Button */}
        <div className="mt-20 text-center">
          <Link 
            to="/learn/start" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Start Learning Today
          </Link>
        </div>
      </div>
    </div>
  );
}