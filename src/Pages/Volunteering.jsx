import { useState } from 'react';
import { FaCode, FaHandsHelping, FaUsers, FaChalkboardTeacher, FaChevronDown, FaQuoteLeft } from 'react-icons/fa';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

export default function Volunteering() {
  const [activeTab, setActiveTab] = useState('mentor');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    skills: '',
    availability: []
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    setFormData(prev => {
      const newAvailability = checked 
        ? [...prev.availability, value]
        : prev.availability.filter(item => item !== value);
      return { ...prev, availability: newAvailability };
    });
  };

  const smoothScrollTo = (element, duration = 1000) => {
    const start = window.pageYOffset;
    const target = element.getBoundingClientRect().top;
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, start + target * ease);
      if (progress < 1) requestAnimationFrame(animateScroll);
    };

    requestAnimationFrame(animateScroll);
  };

  const volunteerRoles = [
    {
      id: 'beginner-tutor',
      title: 'Beginner Tutor',
      icon: <FaChalkboardTeacher className="text-blue-400 text-3xl" />,
      description: 'Teach absolute basics: variables, conditionals, and simple loops in Python/Scratch.',
      requirements: [
        '1+ year coding experience',
        'Patience with first-time coders',
        '2+ hours weekly'
      ]
    },
    {
      id: 'intermediate-tutor',
      title: 'Intermediate Tutor',
      icon: <FaCode className="text-cyan-400 text-3xl" />,
      description: 'Guide students through multi-week projects websites, apps and debugging.',
      requirements: [
        '1.5+ year coding experience',
        'Can break down problems',
        '3+ hours weekly'
      ]
        },
    {
      id: 'advanced-tutor',
      title: 'Advanced Tutor',
      icon: <FaUsers className="text-blue-300 text-3xl" />,
      description: 'Teach data structures arrays, ArrayLists and basic algorithms.',
      requirements: [
        'AP CSA-level knowledge',
        'Knows Java syntax',
        '4+ hours weekly'
      ]
    },
    {
      id: 'study-buddy',
      title: 'Learning Partner',
      icon: <FaHandsHelping className="text-sky-400 text-3xl" />,
      description: 'Just be an encouraging presence while students work through tutorials.',
      requirements: [
        'Willing to learn alongside',
        'Can help with error messages',
        'Some coding knowledge needed'
      ]
    }
  ];

  const testimonials = [
    {
      quote: "I help students with their coding homework. It feels good when they finally get it.",
      author: "A new tutor"
    },
    {
      quote: "The students work hard. I just explain things step by step.",
      author: "Another tutor"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-r from-sky-200 to-sky-500 text-black">
      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center overflow-hidden">
        {/* Layered background */}
        <div className="absolute inset-0 z-0">
    {/* White top gradient */}
    <div className="absolute inset-0 bg-gradient-to-b from-white to-transparent h-1/3 opacity-80"></div>
    
    {/* Tech background */}
    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1639762681057-408e52192e55?q=80&w=2232&auto=format&fit=crop')] bg-cover bg-center"></div>
    
    {/* Dark overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-blue-700/80"></div>
    
    {/* Floating elements */}
    <div className="absolute inset-0 opacity-20">
      {[...Array(20)].map((_, i) => (
        <div 
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animation: `float ${Math.random() * 10 + 10}s linear infinite`,
            animationDelay: `${Math.random() * 5}s`
          }}
        />
      ))}
    </div>
        </div>

        {/* Content */}
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="text-sm font-mono text-white mb-4 tracking-widest">JOIN OUR MOVEMENT</div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r text-white pb-2">
              <TypeAnimation
                sequence={[
                  'Volunteer With Us',
                  1500,
                  'Teach Tech Skills',
                  1500,
                  'Change Lives',
                  1500
                ]}
                speed={30}
                repeat={Infinity}
              />
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto">
              Empower the next generation of technologists through our community education initiatives
            </p>
            <motion.div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 20px rgba(34, 211, 238, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold tracking-wider py-3 px-8 rounded-md shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
                onClick={() => {
                  const applySection = document.getElementById('apply');
                  smoothScrollTo(applySection);
                }}
              >
                BECOME A VOLUNTEER
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        
        <button 
          onClick={() => smoothScrollTo(document.querySelector('#content-start'))}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-blue-300 text-2xl focus:outline-none hover:text-white transition-colors z-10"
          aria-label="Scroll down"
        >
          <FaChevronDown className="bounce" />
        </button>

        <style jsx>{`
          @keyframes float {
            0% { transform: translateY(0) rotate(0deg); opacity: 1; }
            100% { transform: translateY(-100vh) rotate(360deg); opacity: 0; }
          }
          .bounce {
            animation: bounce 2s infinite;
          }
          @keyframes bounce {
            0%, 20%, 50%, 80%, 100% {transform: translateY(0);}
            40% {transform: translateY(-15px);}
            60% {transform: translateY(-7px);}
          }
        `}</style>
      </section>

      {/* Main Content */}
      <div id="content-start" className="relative z-20 bg-white">
        {/* Roles Section */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={sectionVariants}
          className="relative py-24 bg-white"
        >
          <div className="container mx-auto px-6">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                VOLUNTEER ROLES
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex justify-center mb-12">
              <div className="inline-flex bg-blue-50 rounded-lg p-1 shadow-lg border border-blue-200">
                {volunteerRoles.map((role) => (
                  <button
                    key={role.id}
                    onClick={() => setActiveTab(role.id)}
                    className={`px-6 py-2 rounded-md font-mono text-sm transition-all ${activeTab === role.id ? 'bg-blue-100 text-blue-800 shadow-md shadow-blue-900/30' : 'hover:bg-blue-100/50 text-blue-700'}`}
                  >
                    {role.title.toUpperCase()}
                  </button>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial="hidden"
              animate="visible"
              variants={itemVariants}
              className="bg-blue-50 rounded-xl shadow-2xl overflow-hidden border border-blue-200"
            >
              {volunteerRoles.find(role => role.id === activeTab) && (
                <div className="p-8 md:flex items-start">
                  <div className="md:w-1/4 mb-6 md:mb-0 flex justify-center">
                    <motion.div
                      animate={{ 
                        rotate: [0, 5, -5, 0],
                        y: [0, -8, 0]
                      }}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: "reverse", 
                        duration: 6 
                      }}
                      className="p-4 bg-white rounded-lg border border-blue-200"
                    >
                      {volunteerRoles.find(role => role.id === activeTab).icon}
                    </motion.div>
                  </div>
                  <div className="md:w-3/4">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4 font-mono tracking-wider">
                      {volunteerRoles.find(role => role.id === activeTab).title}
                    </h3>
                    <p className="text-blue-900 mb-6">
                      {volunteerRoles.find(role => role.id === activeTab).description}
                    </p>
                    <h4 className="font-semibold text-blue-700 mb-2 font-mono tracking-wider">WHAT WE NEED:</h4>
                    <ul className="space-y-2">
                      {volunteerRoles.find(role => role.id === activeTab).requirements.map((item, index) => (
                        <li key={index} className="flex items-start">
                          <span className="text-blue-600 mr-2">⟫</span>
                          <span className="text-blue-900">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.section>

        {/* Testimonials */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={sectionVariants}
          className="py-24 relative bg-blue-50"
        >
          <div className="container mx-auto px-6">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                VOLUNTEER STORIES
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
            </motion.div>
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
            >
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-xl border border-blue-200 shadow-lg"
                >
                  <FaQuoteLeft className="text-blue-600 text-4xl mb-4 mx-auto" />
                  <p className="text-blue-900 italic text-lg mb-6">{testimonial.quote}</p>
                  <p className="font-mono text-blue-700 tracking-wider">— {testimonial.author}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.section>

        {/* Application Form */}
        <motion.section 
          id="apply"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={sectionVariants}
          className="py-24 relative bg-white"
        >
          <div className="container mx-auto px-6 max-w-4xl">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                JOIN OUR TEAM
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
              <p className="text-blue-800 mt-4 max-w-2xl mx-auto font-mono tracking-wider">
                READY TO MAKE AN IMPACT THROUGH TECH EDUCATION? APPLY TO VOLUNTEER BELOW.
              </p>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="bg-blue-50 rounded-xl shadow-2xl p-8 border border-blue-200 text-center"
            >
              <div className="mb-8">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-blue-600 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <h3 className="text-xl font-bold text-blue-900 mb-4">Volunteer Application</h3>
                <p className="text-blue-800 mb-8 max-w-lg mx-auto">
                  Click the button below to access our volunteer application form. It only takes a few minutes to complete!
                </p>
              </div>
              
              <motion.a
                href="https://docs.google.com/forms/d/e/1FAIpQLSdh-9sRk-zLGucuqhB4ncGecbPh7n5FPMDexBf3KJxio-QQPQ/viewform?usp=sharing&ouid=110811429537675649197" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 5px 15px rgba(0, 100, 255, 0.3)"
                }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-mono tracking-wider py-4 px-8 rounded-md shadow-lg shadow-blue-900/50 transition-all duration-300"
              >
                GO TO APPLICATION FORM
              </motion.a>
              
              <p className="text-blue-600 text-sm mt-4">
                (Opens in a new window)
              </p>
            </motion.div>
          </div>
        </motion.section>

        {/* Next Steps */}
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          variants={sectionVariants}
          className="py-24 relative bg-blue-50"
        >
          <div className="container mx-auto px-6 text-center">
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                VOLUNTEER PROCESS
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
            </motion.div>
            <motion.div 
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl border border-blue-200 shadow-lg"
              >
                <div className="text-blue-600 text-4xl mb-4 font-mono">01</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2 font-mono tracking-wider">APPLICATION</h3>
                <p className="text-blue-900">Complete our volunteer application form</p>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl border border-blue-200 shadow-lg"
              >
                <div className="text-blue-600 text-4xl mb-4 font-mono">02</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2 font-mono tracking-wider">APPLICATION REVIEW</h3>
                <p className="text-blue-900">We carefully evaluate each submission within 5-7 business days</p>
              </motion.div>
              <motion.div 
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white p-6 rounded-xl border border-blue-200 shadow-lg"
              >
                <div className="text-blue-600 text-4xl mb-4 font-mono">03</div>
                <h3 className="text-xl font-semibold text-blue-800 mb-2 font-mono tracking-wider">ONBOARDING</h3>
                <p className="text-blue-900">Complete training and start volunteering</p>
              </motion.div>
            </motion.div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}