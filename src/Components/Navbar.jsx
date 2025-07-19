import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import logo from './logo.png';

function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();
  const dropdownRef = useRef(null);
  const mobileMenuRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
      if (mobileMenuRef.current && 
          !mobileMenuRef.current.contains(event.target) &&
          !event.target.closest('.mobile-menu-button')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, []);

  // Custom smooth scroll function
  const smoothScrollTo = (elementId, duration = 800) => {
    const element = document.getElementById(elementId);
    if (!element) return;

    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset - 80;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    const easeInOutQuad = (t, b, c, d) => {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  const scrollToContact = () => {
    if (location.pathname === '/') {
      smoothScrollTo('contact');
    } else {
      navigate('/');
      setTimeout(() => smoothScrollTo('contact'), 100);
    }
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const closeAllDropdowns = () => {
    setActiveDropdown(null);
  };

  const handleMobileLinkClick = (e, action) => {
    e.stopPropagation();
    if (action === 'contact') {
      scrollToContact();
    }
    closeAllDropdowns();
  };

  return (
    <nav className="bg-gradient-to-r from-sky-100 to-sky-300 shadow-sm sticky top-0 z-50">
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo section */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center" onClick={closeAllDropdowns}>
              <img 
                src={logo} 
                alt="CodingEquity Logo"
                className="h-27 w-auto mr-2 filter"
              />
              <span className="text-2xl md:text-3xl font-semibold text-black tracking-tight">
                <span className="text-blue-800">Coding</span>Equity
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 ml-auto" ref={dropdownRef}>
            {/* About dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('about')}
                className={`text-black hover:text-blue-600 px-3 py-2 text-base font-medium flex items-center transition-colors duration-200 ${activeDropdown === 'about' ? 'bg-blue-100 rounded-t' : ''}`}
              >
                About
                <svg className={`ml-1 h-4 w-4 transform ${activeDropdown === 'about' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {activeDropdown === 'about' && (
                <div className="absolute right-0 mt-0 w-48 bg-blue-100 rounded-b-md shadow-lg py-1 border border-blue-200 z-10">
                  <Link 
                    to="/about" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-200 active:bg-blue-300 transition-colors duration-150"
                    onClick={closeAllDropdowns}
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/team" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-200 active:bg-blue-300 transition-colors duration-150"
                    onClick={closeAllDropdowns}
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            {/* Contribute dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('contribute')}
                className={`text-black hover:text-blue-600 px-3 py-2 text-base font-medium flex items-center transition-colors duration-200 ${activeDropdown === 'contribute' ? 'bg-blue-100 rounded-t' : ''}`}
              >
                Contribute
                <svg className={`ml-1 h-4 w-4 transform ${activeDropdown === 'contribute' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {activeDropdown === 'contribute' && (
                <div className="absolute right-0 mt-0 w-48 bg-blue-100 rounded-b-md shadow-lg py-1 border border-blue-200 z-10">
                  <Link 
                    to="/volunteering" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-200 active:bg-blue-300 transition-colors duration-150"
                    onClick={closeAllDropdowns}
                  >
                    Volunteering
                  </Link>
                  <Link 
                    to="/donate" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-200 active:bg-blue-300 transition-colors duration-150"
                    onClick={closeAllDropdowns}
                  >
                    Donate
                  </Link>
                </div>
              )}
            </div>

            {/* Learn dropdown */}
            <div className="relative">
              <button 
                onClick={() => toggleDropdown('learn')}
                className={`text-black hover:text-blue-600 px-3 py-2 text-base font-medium flex items-center transition-colors duration-200 ${activeDropdown === 'learn' ? 'bg-blue-100 rounded-t' : ''}`}
              >
                Learn
                <svg className={`ml-1 h-4 w-4 transform ${activeDropdown === 'learn' ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              {activeDropdown === 'learn' && (
                <div className="absolute right-0 mt-0 w-56 bg-blue-100 rounded-b-md shadow-lg py-1 border border-blue-200 z-10">
                  <div className="px-4 py-2 text-xs font-semibold text-blue-800 uppercase tracking-wider bg-blue-200">
                    Course Levels
                  </div>
                  <Link 
                    to="/learn/beginner" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-200 active:bg-blue-300 transition-colors duration-150"
                    onClick={closeAllDropdowns}
                  >
                    Beginner Courses
                  </Link>
                  <Link 
                    to="/learn/intermediate" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-200 active:bg-blue-300 transition-colors duration-150"
                    onClick={closeAllDropdowns}
                  >
                    Intermediate Courses
                  </Link>
                  <Link 
                    to="/learn/advanced" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-200 active:bg-blue-300 transition-colors duration-150"
                    onClick={closeAllDropdowns}
                  >
                    Advanced Courses
                  </Link>
                  <div className="border-t border-blue-300 my-1"></div>
                  <Link 
                    to="/learn/start" 
                    className="block px-4 py-2 text-gray-700 hover:bg-blue-200 active:bg-blue-300 transition-colors duration-150"
                    onClick={closeAllDropdowns}
                  >
                    Register for Classes
                  </Link>
                </div>
              )}
            </div>

            {/* Simple Links */}
            <Link
              to="/forum"
              className="text-black hover:text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-md text-base font-medium whitespace-nowrap transition-colors duration-200"
              onClick={closeAllDropdowns}
            >
              Forum
            </Link>

            <Link
              to="/hackathon"
              className="text-black hover:text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-md text-base font-medium whitespace-nowrap transition-colors duration-200"
              onClick={closeAllDropdowns}
            >
              Hackathon
            </Link>

            <button
              onClick={scrollToContact}
              className="text-black hover:text-blue-600 hover:bg-blue-100 px-3 py-2 rounded-md text-base font-medium whitespace-nowrap transition-colors duration-200"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden ml-4 flex items-center">
            <button 
              className="mobile-menu-button text-slate-700 hover:text-blue-600 p-2 rounded-full focus:outline-none hover:bg-blue-100"
              onClick={() => toggleDropdown('mobile')}
              aria-label="Toggle menu"
            >
              {activeDropdown === 'mobile' ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {activeDropdown === 'mobile' && (
          <div 
            ref={mobileMenuRef}
            className="md:hidden bg-blue-50 shadow-lg rounded-lg mx-2 mt-2 py-2 transition-all duration-300 ease-in-out"
          >
            {/* About */}
            <div className="px-4 py-2">
              <button 
                onClick={() => toggleDropdown('aboutMobile')}
                className={`w-full flex justify-between items-center text-left text-black hover:text-blue-600 py-3 px-3 rounded-md ${activeDropdown === 'aboutMobile' ? 'bg-blue-200' : 'hover:bg-blue-100'}`}
              >
                <span className="font-medium">About</span>
                <svg 
                  className={`h-5 w-5 transform transition-transform ${activeDropdown === 'aboutMobile' ? 'rotate-180' : ''}`}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'aboutMobile' && (
                <div className="pl-4 mt-1 space-y-2 bg-blue-100 rounded-md p-2">
                  <Link 
                    to="/about" 
                    className="block py-3 px-4 text-gray-700 hover:bg-blue-200 active:bg-blue-300 rounded transition-colors"
                    onClick={(e) => handleMobileLinkClick(e)}
                  >
                    About Us
                  </Link>
                  <Link 
                    to="/team" 
                    className="block py-3 px-4 text-gray-700 hover:bg-blue-200 active:bg-blue-300 rounded transition-colors"
                    onClick={(e) => handleMobileLinkClick(e)}
                  >
                    Our Team
                  </Link>
                </div>
              )}
            </div>

            {/* Contribute */}
            <div className="px-4 py-2">
              <button 
                onClick={() => toggleDropdown('contributeMobile')}
                className={`w-full flex justify-between items-center text-left text-black hover:text-blue-600 py-3 px-3 rounded-md ${activeDropdown === 'contributeMobile' ? 'bg-blue-200' : 'hover:bg-blue-100'}`}
              >
                <span className="font-medium">Contribute</span>
                <svg 
                  className={`h-5 w-5 transform transition-transform ${activeDropdown === 'contributeMobile' ? 'rotate-180' : ''}`}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'contributeMobile' && (
                <div className="pl-4 mt-1 space-y-2 bg-blue-100 rounded-md p-2">
                  <Link 
                    to="/volunteering" 
                    className="block py-3 px-4 text-gray-700 hover:bg-blue-200 active:bg-blue-300 rounded transition-colors"
                    onClick={(e) => handleMobileLinkClick(e)}
                  >
                    Volunteering
                  </Link>
                  <Link 
                    to="/donate" 
                    className="block py-3 px-4 text-gray-700 hover:bg-blue-200 active:bg-blue-300 rounded transition-colors"
                    onClick={(e) => handleMobileLinkClick(e)}
                  >
                    Donate
                  </Link>
                </div>
              )}
            </div>

            {/* Learn */}
            <div className="px-4 py-2">
              <button 
                onClick={() => toggleDropdown('learnMobile')}
                className={`w-full flex justify-between items-center text-left text-black hover:text-blue-600 py-3 px-3 rounded-md ${activeDropdown === 'learnMobile' ? 'bg-blue-200' : 'hover:bg-blue-100'}`}
              >
                <span className="font-medium">Learn</span>
                <svg 
                  className={`h-5 w-5 transform transition-transform ${activeDropdown === 'learnMobile' ? 'rotate-180' : ''}`}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {activeDropdown === 'learnMobile' && (
                <div className="pl-4 mt-1 space-y-2 bg-blue-100 rounded-md p-2">
                  <div className="px-4 pt-2 text-xs font-semibold text-blue-800 uppercase tracking-wider bg-blue-200 rounded-md">
                    Course Levels
                  </div>
                  <Link 
                    to="/learn/beginner" 
                    className="block py-3 px-4 text-gray-700 hover:bg-blue-200 active:bg-blue-300 rounded transition-colors"
                    onClick={(e) => handleMobileLinkClick(e)}
                  >
                    Beginner Courses
                  </Link>
                  <Link 
                    to="/learn/intermediate" 
                    className="block py-3 px-4 text-gray-700 hover:bg-blue-200 active:bg-blue-300 rounded transition-colors"
                    onClick={(e) => handleMobileLinkClick(e)}
                  >
                    Intermediate Courses
                  </Link>
                  <Link 
                    to="/learn/advanced" 
                    className="block py-3 px-4 text-gray-700 hover:bg-blue-200 active:bg-blue-300 rounded transition-colors"
                    onClick={(e) => handleMobileLinkClick(e)}
                  >
                    Advanced Courses
                  </Link>
                  <div className="border-t border-blue-300 my-1"></div>
                  <Link 
                    to="/learn/start" 
                    className="block py-3 px-4 text-gray-700 hover:bg-blue-200 active:bg-blue-300 rounded transition-colors"
                    onClick={(e) => handleMobileLinkClick(e)}
                  >
                    Register for Classes
                  </Link>
                </div>
              )}
            </div>

            {/* Simple Links */}
            <Link
              to="/forum"
              className="block px-4 py-3 text-black hover:bg-blue-200 active:bg-blue-300 transition-colors rounded-md mx-2"
              onClick={(e) => handleMobileLinkClick(e)}
            >
              Forum
            </Link>
            <Link
              to="/hackathon"
              className="block px-4 py-3 text-black hover:bg-blue-200 active:bg-blue-300 transition-colors rounded-md mx-2"
              onClick={(e) => handleMobileLinkClick(e)}
            >
              Hackathon
            </Link>
            <button
              onClick={(e) => handleMobileLinkClick(e, 'contact')}
              className="block w-full text-left px-4 py-3 text-black hover:bg-blue-200 active:bg-blue-300 transition-colors rounded-md mx-2"
            >
              Contact
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;