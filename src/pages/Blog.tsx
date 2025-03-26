import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import Banner from '../components/Blog/banner';
import BlogList from '../components/Blog/blogList';
import NewsletterSubscription from '../components/Blog/NewsletterSubscription';
import Footer from '../components/footer';
import { ArrowUp } from 'lucide-react';

const Blog = () => {
  const [showButton, setShowButton] = useState(false);

  // This function handles the button visibility based on scroll position
  const handleScroll = () => {
    // Show button after scrolling down 300px (you can adjust this value)
    const scrollThreshold = 300;
    if (window.scrollY > scrollThreshold) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  // Add scroll event listener when component mounts
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative font-urbanist">
      <Header />
      <Banner />
      <BlogList />
      <NewsletterSubscription />
      
      <Footer />
      {showButton && (
        <button
          onClick={scrollToTop}
          className="fixed !z-[8999000] bottom-8 right-2 hover:bg-pink-600 bg-primary-mainPink text-white rounded-full p-4 transition-colors flex items-center gap-2"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default Blog;
