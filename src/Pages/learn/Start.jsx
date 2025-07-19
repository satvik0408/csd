import React, { useState } from 'react';
import { motion } from 'framer-motion';

export default function ClassSignup() {
  const CLASS_SIGNUP_FORM = "https://docs.google.com/forms/d/e/1FAIpQLScc10aVlfZmQEdBtEZXx9_kF2ibt1zWmDEkVkpZ62_wf0Cctg/viewform?usp=header";
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md relative"
      >
        {/* Floating card with subtle shadow */}
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl opacity-20 blur-sm"></div>
        
        <div className="relative bg-white rounded-xl shadow-xl overflow-hidden">
          {/* Header with elegant gradient */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 p-8 text-center relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
            <motion.div
              whileHover={{ scale: 1.05, rotate: 2 }}
              className="inline-flex items-center justify-center p-4 bg-white/20 rounded-full mb-4 backdrop-blur-sm"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
                />
              </svg>
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-2xl font-bold text-white tracking-tight"
            >
              Elevate Your Skills
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-blue-100 mt-2"
            >
              Join our next cohort of learners
            </motion.p>
          </div>

          {/* Content */}
          <div className="p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="mb-8"
            >
              <p className="text-black text-center leading-relaxed">
                Our courses are designed to help you master new skills with expert guidance and hands-on projects.
              </p>
            </motion.div>

            {/* Premium Button */}
            <motion.div 
              className="relative"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg shadow-md"
                animate={{
                  opacity: isHovered ? 0.8 : 1,
                  scale: isHovered ? 1.02 : 1,
                }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              />
              <motion.a
                href={CLASS_SIGNUP_FORM}
                target="_blank"
                rel="noopener noreferrer"
                className="relative flex items-center justify-center px-6 py-4 rounded-lg font-medium text-white"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <span className="relative z-10">Reserve Your Spot</span>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 ml-2 relative z-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  animate={{ x: isHovered ? 4 : 0 }}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </motion.svg>
              </motion.a>
            </motion.div>

            {/* Footer */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="mt-6 text-center text-sm text-black"
            >
              <p>Personal Tutors</p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}