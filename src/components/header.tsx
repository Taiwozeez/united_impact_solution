import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate page loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    const handleScroll = () => {
      setIsSticky(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const mobileMenuVariants = {
    open: { 
      opacity: 1,
      x: 0,
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    },
    closed: { 
      opacity: 0,
      x: "100%",
      transition: { 
        type: "spring",
        stiffness: 300,
        damping: 30
      }
    }
  };

  const hamburgerVariants = {
    open: { rotate: 45, y: 6 },
    closed: { rotate: 0, y: 0 }
  };

  const hamburgerMiddleVariants = {
    open: { opacity: 0 },
    closed: { opacity: 1 }
  };

  const hamburgerBottomVariants = {
    open: { rotate: -45, y: -6 },
    closed: { rotate: 0, y: 0 }
  };

  return (
    <>
      {/* Preloader - Adjusted for mobile centering */}
      {isLoading && (
        <div 
          id="xb-loadding" 
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full transition-opacity duration-500 bg-white"
          style={{ opacity: isLoading ? 1 : 0, pointerEvents: isLoading ? 'auto' : 'none' }}
        >
          <div className="absolute w-16 h-16 border-t-4 border-b-4 border-blue-600 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Header - Rest remains exactly the same */}
      <header 
        id="xb-header-area" 
        className={`header-area ${isSticky ? 'fixed top-0 bg-white shadow-md' : 'absolute top-[35px]'} left-0 right-0 w-full z-30 transition-all duration-300`}
      >
        <div className={`xb-header ${isSticky ? 'stricky-fixed' : ''}`}>
          <div className="container px-4 mx-auto">
            <div className="flex items-center justify-between py-4">
              {/* Logo */}
              <div className="header-logo">
                <a href="/" className="inline-block">
                  <img 
                    id="white-logo" 
                    src="/images/logo06.svg" 
                    alt="Logo" 
                    className={`h-8 ${isSticky ? 'hidden' : 'block'}`}
                  />
                  <img 
                    src="/images/logo06_dark.svg" 
                    alt="Logo" 
                    className={`h-8 ${isSticky ? 'block' : 'hidden'}`}
                  />
                </a>
              </div>

              {/* Navigation */}
              <div className="flex items-center">
                {/* Desktop Menu */}
                <div className="hidden xl:flex items-center ml-0 mr-[109px]">
                  <nav className="main-menu">
                    <ul className="flex space-x-1">
                      {['Home', 'About', 'Services', 'Vlog', 'Blog', 'Podcast', 'Shop'].map((item) => (
                        <li key={item}>
                          <a 
                            href={item.toLowerCase()} 
                            className={`px-5 py-5 ${isSticky ? 'text-gray-800' : 'text-white'} font-medium hover:text-blue-800 transition-colors duration-200`}
                          >
                            {item}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Mobile Menu Button */}
                <div className="xl:hidden">
                  <button 
                    className="p-2 focus:outline-none"
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                  >
                    <motion.div 
                      className="flex flex-col w-6 h-6 justify-between"
                      initial="closed"
                      animate={isMobileMenuOpen ? "open" : "closed"}
                    >
                      <motion.span 
                        className="w-full h-0.5 bg-current"
                        variants={hamburgerVariants}
                      />
                      <motion.span 
                        className="w-full h-0.5 bg-current"
                        variants={hamburgerMiddleVariants}
                      />
                      <motion.span 
                        className="w-full h-0.5 bg-current"
                        variants={hamburgerBottomVariants}
                      />
                    </motion.div>
                  </button>
                </div>

                {/* Get Started Button */}
                <div className="hidden ml-4 md:block">
                  <a 
                    href="/contact" 
                    className={`inline-flex items-center px-6 py-3 rounded-full font-medium transition-all duration-200 ${
                      isSticky 
                        ? 'text-white bg-blue-800 hover:bg-blue-900' 
                        : 'text-blue-800 bg-white hover:bg-gray-100'
                    }`}
                  >
                    Get Started
                    <span className={`ml-3 flex items-center justify-center w-6 h-6 rounded-full ${
                      isSticky ? 'bg-white text-blue-800' : 'bg-blue-800 text-white'
                    }`}>
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="fixed inset-0 z-20 bg-white xl:hidden pt-20 px-4"
              initial="closed"
              animate="open"
              exit="closed"
              variants={mobileMenuVariants}
            >
              {/* Close Button */}
              <button 
                onClick={closeMobileMenu}
                className="absolute top-4 right-4 p-2 text-gray-800 hover:text-blue-800 transition-colors"
                aria-label="Close menu"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-8 w-8" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12" 
                  />
                </svg>
              </button>

              {/* Menu Content */}
              <nav className="main-menu">
                <ul className="flex flex-col space-y-4">
                  {['Home', 'About', 'Services', 'Vlog', 'Blog', 'Podcast', 'Shop'].map((item) => (
                    <li key={item}>
                      <a 
                        href={item.toLowerCase()} 
                        className="block px-5 py-3 text-gray-800 font-medium hover:text-blue-800 transition-colors duration-200 text-xl"
                        onClick={closeMobileMenu}
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
};

export default Header;