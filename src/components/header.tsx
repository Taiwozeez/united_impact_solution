import { useState, useEffect } from 'react';

const Header = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

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

  return (
    <>
      {/* Preloader */}
      {isLoading && (
        <div 
          id="xb-loadding" 
          className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-500 bg-white"
          style={{ opacity: isLoading ? 1 : 0, pointerEvents: isLoading ? 'auto' : 'none' }}
        >
          <div className="w-16 h-16 border-t-4 border-b-4 border-blue-600 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Header */}
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
                  <button className="p-2 text-gray-800 focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
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
      </header>
    </>
  );
};

export default Header;