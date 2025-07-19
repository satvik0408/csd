import React from 'react';
import { Link } from 'react-router-dom';

export default function Beginner() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-sky-100 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full mb-4">
            Start Learning
          </span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 mb-4 leading-tight">
            Beginner <span className="text-blue-600">Coding Courses</span>
          </h1>
          <p className="text-lg text-blue-700/90 max-w-2xl mx-auto">
            Kickstart your development journey with our carefully crafted beginner courses
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-3">HTML/CSS Mastery</h2>
              <p className="text-blue-800/80 mb-6">
                Build beautiful websites from scratch with modern HTML5 and CSS3 techniques.
              </p>
              <Link 
                to="/learn/html-css-basics" 
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
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold text-blue-900 mb-3">JavaScript Foundations</h2>
              <p className="text-blue-800/80 mb-6">
                Learn core programming concepts with JavaScript, the language of the web.
              </p>
              <Link 
                to="/learn/javascript-basics" 
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
              <h2 className="text-2xl font-bold text-blue-900 mb-3">Web Dev Essentials</h2>
              <p className="text-blue-800/80 mb-6">
                Everything you need to start building modern websites and applications.
              </p>
              <Link 
                to="/learn/web-dev-primer" 
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