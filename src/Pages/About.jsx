import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function About() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Content blocks
  const contentBlocks = [
    {
      title: "Our Story",
      description: "Founded in 2025 to make coding fun and accessible for young learners",
      stats: ["200+ Students", "10+ States"],
      icon: "🚀",
      color: "bg-gradient-to-br from-blue-400 to-cyan-400"
    },
    {
      title: "Our Method",
      description: "Learning with creative projects and peer mentoring",
      icon: "🎮",
      color: "bg-gradient-to-br from-blue-500 to-indigo-400"
    },
    {
      title: "Our Impact",
      stats: [
        { value: "92%", label: "Student Engagement" },
        { value: "4.8/5", label: "Course Ratings" },
        { value: "100%", label: "Free Access" }
      ],
      icon: "✨",
      color: "bg-gradient-to-br from-cyan-400 to-blue-500"
    }
  ];

  const detailedSections = [
    {
      title: "Learning Approach",
      content: "We make coding exciting through real development, and creative projects that kids love. Our curriculum is designed to feel like play while teaching real tech skills."
    },
    {
      title: "Flexible Scheduling",
      content: "After-school, weekends, or evenings—we meet students when they're ready to learn."
    },
    {
      title: "Future Goals",
      content: "Our dream is to help 100,000 young learners discover the joy of coding by 2026 through our programs and other opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 text-blue-900 relative overflow-hidden">
      {/* Main content */}
      <div className="relative z-10 pt-20 pb-32 px-6 max-w-4xl mx-auto space-y-16">
        {/* Hero section */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isMounted ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500 pb-3">
            About CodingEquity
          </h1>
          <p className="text-xl text-blue-700/90 max-w-2xl mx-auto">
            Helping kids and teens discover the magic of coding
          </p>
        </motion.div>

        {/* Feature cards - animate on mount */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {contentBlocks.map((block, index) => (
            <motion.div
              key={index}
              className={`p-6 rounded-xl border border-white/20 shadow-lg ${block.color} text-white`}
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + index * 0.1, duration: 0.4 }}
              whileHover={{ y: -3 }}
            >
              <div className="text-4xl mb-4">{block.icon}</div>
              <h3 className="text-xl font-bold mb-3">{block.title}</h3>
              {block.description && (
                <p className="mb-4 text-white/90">{block.description}</p>
              )}
              
              {block.stats && (
                <div className="space-y-2">
                  {block.stats.map((stat, i) => (
                    <div key={i} className="bg-white/20 p-2 rounded-lg">
                      {typeof stat === 'string' ? (
                        <span>{stat}</span>
                      ) : (
                        <>
                          <div className="font-bold">{stat.value}</div>
                          <div className="text-sm opacity-80">{stat.label}</div>
                        </>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Detailed sections */}
        <div className="space-y-8 mt-20">
          {detailedSections.map((section, index) => (
            <motion.div
              key={index}
              className="bg-white/95 p-8 rounded-2xl shadow-sm border border-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={isMounted ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1, duration: 0.4 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-blue-800">
                {section.title}
              </h3>
              <p className="text-blue-700/90">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fixed CTA */}
      <motion.div
  className="fixed right-6 bottom-6 z-20"
  initial={{ opacity: 0 }}
  animate={isMounted ? { opacity: 1 } : {}}
  transition={{ delay: 1.4 }}
>
  <a 
    href="https://discord.gg/5WD7zm84" 
    target="_blank" 
    rel="noopener noreferrer"
    aria-label="Join our Discord community"
  >
    <motion.button 
      className="bg-gradient-to-br from-blue-600 to-cyan-500 text-white px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all flex items-center"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="flex items-center">
        Join Our Community
        <svg 
          className="ml-2" 
          width="16" 
          height="16" 
          viewBox="0 0 24 24" 
          fill="none"
          aria-hidden="true"
        >
          <path 
            d="M5 12H19M19 12L12 5M19 12L12 19" 
            stroke="currentColor" 
            strokeWidth="2"
          />
        </svg>
        <span className="sr-only">(Opens in new tab)</span>
      </span>
    </motion.button>
  </a>
</motion.div>
    </div>
  );
}

export default About;