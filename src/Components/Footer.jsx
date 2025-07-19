import { Link, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

function Footer() {
  const navigate = useNavigate();

  const smoothScroll = (targetId, duration = 1500) => { // Increased duration for slower scroll
    const target = document.getElementById(targetId);
    if (!target) return;

    const targetPosition = target.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const distance = targetPosition;
    let startTime = null;

    const animation = (currentTime) => {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    };

    // Easing function for smooth acceleration/deceleration
    const easeInOutQuad = (t, b, c, d) => {
      t /= d/2;
      if (t < 1) return c/2*t*t + b;
      t--;
      return -c/2 * (t*(t-2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  const scrollToTop = () => {
    if (location.pathname === '/') {
      smoothScroll('root', 2000); // Even slower for top scroll
    } else {
      navigate('/');
      sessionStorage.setItem('scrollToTop', 'true');
    }
    setActiveDropdown(null);
  };
  const scrollToContact = () => {
    if (location.pathname === '/') {
      // If already on home page, use our custom smooth scroll
      smoothScroll('contact');  // Changed from smoothScrollTo to smoothScroll
    } else {
      // If on another page, navigate to home first
      navigate('/');
      // Store the intention to scroll to contact
      sessionStorage.setItem('scrollToContact', 'true');
    }
    setActiveDropdown(null);
  };

  useEffect(() => {
    if (location.pathname === '/' && sessionStorage.getItem('scrollToContact')) {
      smoothScroll('contact');  // Changed from smoothScrollTo to smoothScroll
      // Clear the flag
      sessionStorage.removeItem('scrollToContact');
    }
  }, [location.pathname]);

  return (
    <div className="relative">
      {/* Wave-shaped mask to create the cut-out effect */}
      <div className="absolute top-0 left-0 w-full h-8 overflow-hidden pointer-events-none">
        <svg 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
          className="w-full h-full"
          style={{ transform: 'scaleY(-1)' }}
        >
          <defs>
            <mask id="wave-mask">
              <rect width="100%" height="100%" fill="white" />
              <path 
                d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" 
                fill="black"
                opacity="0.25"
              />
              <path 
                d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" 
                fill="black"
                opacity="0.5"
              />
              <path 
                d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" 
                fill="black"
              />
            </mask>
          </defs>
          <rect 
            width="100%" 
            height="100%" 
            fill="#0284c7" 
            mask="url(#wave-mask)"
          />
        </svg>
      </div>

      {/* Footer content with background */}
      <footer className="bg-sky-200 text-sky-900 pt-12 pb-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start">
            <div className="mb-6 md:mb-0">
              <div className="flex items-center mb-4">
                <span className="text-xl font-semibold">
                  <span className="text-blue-800">Coding</span>
                  <span className="text-black">Equity</span>
                </span>
              </div>
              <p className="text-sky-800 text-sm mb-2">
                CodingEquity is an official 501(c)(3) nonprofit.
              </p>
              <p className="text-sky-800 text-sm">
                Your donation is tax-deductible. All rights reserved.
              </p>
              <button 
                onClick={scrollToContact}
                className="mt-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-mono tracking-wider py-2 px-6 rounded-md shadow-lg shadow-blue-900/30 hover:shadow-blue-900/50 transition-all"
              >
                CONTACT US
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-8">
              <div className="mb-4 sm:mb-0">
                <h3 className="text-sky-700 font-medium mb-3">Contact Info</h3>
                <ul className="space-y-2">
                  <li>
                    <a href="mailto:contact@codingequity.org" className="text-sky-800 hover:text-sky-900 text-sm transition-colors">
                    codingequityhq@gmail.com
                    </a>
                  </li>
                  <li>
                    <button 
                      onClick={scrollToContact}
                      className="text-sky-800 hover:text-sky-900 text-sm transition-colors text-left"
                    >
                      Send us a message
                    </button>
                  </li>
                </ul>
              </div>

              <div>
  <h3 className="text-sky-700 font-medium mb-3">Directory</h3>
  <ul className="space-y-2">
    <li>
      <button 
        onClick={scrollToTop}
        className="text-sky-800 hover:text-sky-900 text-sm transition-colors text-left"
      >
        Home
      </button>
    </li>
    <li>
      <Link to="/donate" className="text-sky-800 hover:text-sky-900 text-sm transition-colors">
        Donate
      </Link>
    </li>
    <li>
      <button 
        onClick={scrollToContact}
        className="text-sky-800 hover:text-sky-900 text-sm transition-colors text-left"
      >
        Contact
      </button>
    </li>
  </ul>
</div>
              <div>
                <h3 className="text-sky-700 font-medium mb-3">Policies</h3>
                <ul className="space-y-2">
                  <li>
                    <Link to="/terms" className="text-sky-800 hover:text-sky-900 text-sm transition-colors">
                      Terms of Service
                    </Link>
                  </li>
                  <li>
                    <Link to="/privacy" className="text-sky-800 hover:text-sky-900 text-sm transition-colors">
                      Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="border-t border-sky-300 mt-8 pt-6 text-center text-sky-700 text-xs">
            © {new Date().getFullYear()} CodingEquity. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
