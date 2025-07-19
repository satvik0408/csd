import { Link } from "react-router-dom";
import { 
  FaHandsHelping, 
  FaDonate, 
  FaLaptopCode, 
  FaUserPlus, 
  FaEnvelope,
  FaQuoteLeft,
  FaArrowRight,
  FaChalkboardTeacher,
  FaUsers,
  FaGlobeAmericas,
  FaChevronDown
} from "react-icons/fa";
import { useState, useEffect, useRef } from "react";
import { TypeAnimation } from 'react-type-animation';
import { motion, useAnimation } from 'framer-motion';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });
  
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      smoothScrollTo(contactSection, 1500); // Increased duration to 2000ms (2 seconds)
    }
  };
  
  const cardRefs = useRef([]);
  const statRefs = useRef([]);
  const featureRefs = useRef([]);
  const testimonialRef = useRef(null);
  const contactRef = useRef(null);
  const sectionRefs = useRef([]);

  const controls = useAnimation();

  const smoothScrollTo = (element, duration = 100) => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormStatus({ submitting: true, success: false, error: false });
    
    try {
      const response = await fetch('https://formspree.io/f/mjkokyda', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormStatus({ submitting: false, success: true, error: false });
        setFormData({ name: '', email: '', message: '' });
        
        setTimeout(() => {
          setFormStatus(prev => ({ ...prev, success: false }));
        }, 5000);
      } else {
        throw new Error('Form submission failed');
      }
    } catch (error) {
      setFormStatus({ submitting: false, success: false, error: true });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const cards = [
    { icon: <FaHandsHelping size={40} />, title: "Volunteer", link: "/Volunteering" },
    { icon: <FaDonate size={40} />, title: "Donate", link: "/Donate" },
    { icon: <FaLaptopCode size={40} />, title: "Learn", link: "/learn/Start" },
    { icon: <FaUserPlus size={40} />, title: "Join Us", link: "https://discord.gg/5WD7zm84" },
    { 
      icon: <FaEnvelope size={40} />, 
      title: "Contact", 
      action: scrollToContact  // Changed to use action instead of link
    },
  ];

  const testimonials = [
    { 
      quote: "I'm excited to finally understand coding concepts at my own pace with supportive tutors.", 
      author: "Typical High School Student" 
    },
    { 
      quote: "This is exactly what my child needs—patient explanations tailored to their learning style.", 
      author: "Parent of a Future Student" 
    },
    { 
      quote: "As a tutor, I'm passionate about making CS accessible to all students, regardless of background.", 
      author: "Our Teaching Philosophy" 
    }
  ];
  const stats = [
    { value: "200+", label: "Community Members", icon: <FaUsers /> },
    { value: "Free", label: "Beginner-Friendly Lessons", icon: <FaChalkboardTeacher /> },
    { value: "10+", label: "States", icon: <FaGlobeAmericas /> },
  ];

  const features = [
    { 
      title: "Free Courses", 
      desc: "Access our comprehensive curriculum covering Web Development, Javascript, and more at no cost." 
    },
    { 
      title: "Mentorship", 
      desc: "Get personalized 1:1 guidance from experts to accelerate your learning journey." 
    },
    { 
      title: "Strong Foundations",
      desc: "Master core programming concepts that schools often rush through, at your own pace."
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            controls.start({
              opacity: 1,
              y: 0,
              transition: { duration: 0.5 }
            });

            if (entry.target === sectionRefs.current[0]) {
              cardRefs.current.forEach((ref, index) => {
                if (ref) {
                  ref.style.opacity = 1;
                  ref.style.transform = 'translateY(0)';
                  ref.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
                }
              });
            } else if (entry.target === sectionRefs.current[1]) {
              statRefs.current.forEach((ref, index) => {
                if (ref) {
                  ref.style.opacity = 1;
                  ref.style.transform = 'translateY(0)';
                  ref.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
                }
              });
            } else if (entry.target === sectionRefs.current[3]) {
              featureRefs.current.forEach((ref, index) => {
                if (ref) {
                  ref.style.opacity = 1;
                  ref.style.transform = 'translateY(0)';
                  ref.style.transition = `opacity 0.5s ease ${index * 0.1}s, transform 0.5s ease ${index * 0.1}s`;
                }
              });
            } else if (entry.target === sectionRefs.current[4]) {
              if (contactRef.current) {
                contactRef.current.style.opacity = 1;
                contactRef.current.style.transform = 'translateY(0)';
                contactRef.current.style.transition = 'opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s';
              }
            }
          } else {
            if (entry.target === sectionRefs.current[0]) {
              cardRefs.current.forEach((ref) => {
                if (ref) {
                  ref.style.opacity = 0;
                  ref.style.transform = 'translateY(20px)';
                }
              });
            } else if (entry.target === sectionRefs.current[1]) {
              statRefs.current.forEach((ref) => {
                if (ref) {
                  ref.style.opacity = 0;
                  ref.style.transform = 'translateY(20px)';
                }
              });
            } else if (entry.target === sectionRefs.current[3]) {
              featureRefs.current.forEach((ref) => {
                if (ref) {
                  ref.style.opacity = 0;
                  ref.style.transform = 'translateY(20px)';
                }
              });
            } else if (entry.target === sectionRefs.current[4]) {
              if (contactRef.current) {
                contactRef.current.style.opacity = 0;
                contactRef.current.style.transform = 'translateY(20px)';
              }
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    if (testimonialRef.current) {
      observer.observe(testimonialRef.current);
    }

    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, [controls]);

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
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r text-white pb-2">
              <TypeAnimation
                sequence={[
                  'Welcome to CodingEquity',
                  1500,
                  'Empowering Through Tech',
                  1500
                ]}
                speed={30}
                repeat={Infinity}
              />
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-white max-w-2xl mx-auto">
              Join our movement to make tech education accessible to everyone, regardless of background
            </p>
            <motion.div className="flex justify-center gap-4">
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 5px 20px rgba(34, 211, 238, 0.4)"
                }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold tracking-wider py-3 px-8 rounded-md shadow-lg hover:shadow-cyan-500/50 transition-all duration-300"
              >
                <Link to="https://discord.gg/5WD7zm84">JOIN OUR MISSION</Link>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Scroll indicator */}
        <button 
          onClick={() => smoothScrollTo(document.querySelector('#content-start'))}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-blue-200 text-2xl focus:outline-none hover:text-white transition-colors z-10"
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
        {/* Cards Section */}
        <section ref={el => sectionRefs.current[0] = el} className="py-20 relative">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                GET INVOLVED
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8">
              {cards.map((card, index) => (
                <div
                  key={index}
                  ref={el => cardRefs.current[index] = el}
                  style={{ opacity: 0, transform: 'translateY(20px)' }}
                  whileHover={{ y: -10 }}
                >
                  {card.link ? (
                    <Link
                      to={card.link}
                      className={`w-64 h-64 flex flex-col items-center justify-center p-6 rounded-xl shadow-lg border border-blue-200 bg-white
                        ${hoveredCard === index ? 'bg-blue-50' : ''}`}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <motion.div 
                        animate={{ 
                          rotate: hoveredCard === index ? [0, 5, -5, 0] : 0,
                          y: hoveredCard === index ? [0, -8, 0] : 0
                        }}
                        transition={{ duration: 0.6 }}
                        className="p-4 mb-4 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-200"
                      >
                        {card.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold text-blue-800 font-mono tracking-wider">{card.title}</h3>
                    </Link>
                  ) : (
                    <div
                      onClick={card.action}
                      className={`w-64 h-64 flex flex-col items-center justify-center p-6 rounded-xl shadow-lg border border-blue-200 bg-white cursor-pointer
                        ${hoveredCard === index ? 'bg-blue-50' : ''}`}
                      onMouseEnter={() => setHoveredCard(index)}
                      onMouseLeave={() => setHoveredCard(null)}
                    >
                      <motion.div 
                        animate={{ 
                          rotate: hoveredCard === index ? [0, 5, -5, 0] : 0,
                          y: hoveredCard === index ? [0, -8, 0] : 0
                        }}
                        transition={{ duration: 0.6 }}
                        className="p-4 mb-4 rounded-lg bg-gradient-to-br from-blue-100 to-cyan-100 border border-blue-200"
                      >
                        {card.icon}
                      </motion.div>
                      <h3 className="text-xl font-semibold text-blue-800 font-mono tracking-wider">{card.title}</h3>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section ref={el => sectionRefs.current[1] = el} className="py-20 relative bg-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                OUR IMPACT
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  ref={el => statRefs.current[index] = el}
                  style={{ opacity: 0, transform: 'translateY(20px)' }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-xl border border-blue-200 shadow-lg text-center"
                >
                  <div className="text-4xl mb-4 text-blue-800">
                    {stat.icon}
                  </div>
                  <p className="text-5xl font-bold text-blue-900 mb-3">
                    {stat.value}
                  </p>
                  <p className="text-blue-800 font-mono tracking-wider">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section ref={testimonialRef} className="py-20 relative bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                REVIEWS
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
            </div>
            
            <div className="relative h-96 overflow-hidden">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  className={`absolute inset-0 flex flex-col items-center justify-center p-8 text-center ${
                    index === activeTestimonial ? 'opacity-100' : 'opacity-0 pointer-events-none'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: index === activeTestimonial ? 1 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="max-w-3xl mx-auto">
                    <FaQuoteLeft className="text-blue-600 text-4xl mb-8 mx-auto" />
                    <p className="text-xl md:text-2xl text-blue-900 italic mb-8">"{testimonial.quote}"</p>
                    <p className="font-mono text-blue-700 tracking-wider text-lg">— {testimonial.author}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex justify-center mt-8 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? 'bg-blue-600' : 'bg-blue-300'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section ref={el => sectionRefs.current[3] = el} className="py-20 relative bg-blue-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                HOW WE EMPOWER
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {features.map((feature, index) => (
                <div
                  key={index}
                  ref={el => featureRefs.current[index] = el}
                  style={{ opacity: 0, transform: 'translateY(20px)' }}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 rounded-xl border border-blue-200 shadow-lg group"
                >
                  <h3 className="text-xl font-semibold text-blue-800 mb-4 font-mono tracking-wider group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-blue-900 mb-6">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section ref={el => sectionRefs.current[4] = el} className="py-20 relative bg-white" id="contact">
          <div className="container mx-auto px-6 max-w-2xl">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-blue-900 mb-4">
                CONTACT US
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
              <p className="text-blue-800 mt-4 font-mono tracking-wider">
                HAVE A QUESTION OR WANT TO COLLABORATE? REACH OUT!
              </p>
            </div>

            {formStatus.success && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-100 text-green-800 rounded-lg border border-green-200"
              >
                Thank you! Your message has been sent successfully.
              </motion.div>
            )}
            {formStatus.error && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-100 text-red-800 rounded-lg border border-red-200"
              >
                Something went wrong. Please try again later.
              </motion.div>
            )}

            <div 
              ref={contactRef}
              style={{ opacity: 0, transform: 'translateY(20px)' }}
            >
              <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-2xl p-8 border border-blue-200">
                <div className="mb-6">
                  <label className="block text-blue-800 mb-2 font-mono tracking-wider text-sm">FULL NAME</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 placeholder-blue-400"
                    required
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="mb-6">
                  <label className="block text-blue-800 mb-2 font-mono tracking-wider text-sm">EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 placeholder-blue-400"
                    required
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="mb-8">
                  <label className="block text-blue-800 mb-2 font-mono tracking-wider text-sm">MESSAGE</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 bg-blue-50 border border-blue-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-blue-900 placeholder-blue-400 resize-none"
                    required
                    placeholder="Your message here..."
                  />
                </div>
                
                <div className="text-center">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    type="submit"
                    disabled={formStatus.submitting}
                    className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-mono tracking-wider py-3 px-8 rounded-md shadow-lg shadow-blue-900/50 disabled:opacity-50"
                  >
                    {formStatus.submitting ? 'SENDING...' : 'SEND MESSAGE'}
                  </motion.button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}