import React, { useState, useEffect, useRef } from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

interface Slide {
  id: number;
  backgroundImage: string;
  headline: string;
  subline: string;
  ending: string;
}

const HeroSection: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [initialLoad, setInitialLoad] = useState(true);
  const [badgesInView, setBadgesInView] = useState(false);
  const badgesRef = useRef<HTMLDivElement>(null);
  
  const slides: Slide[] = [
    {
      id: 1,
      backgroundImage: "/images/innovatebanner.jpeg",
      headline: "Creating a world where technology is",
      subline: "a universal bridge to opportunity,",
      ending: "equity, and innovation."
    },
    {
      id: 2,
      backgroundImage: "/images/innovatebanner2.png",
      headline: "Empowering communities through",
      subline: "accessible digital education",
      ending: "for all generations."
    },
    {
      id: 3,
      backgroundImage: "/images/innovatebanner3.png",
      headline: "Breaking down barriers with",
      subline: "innovative tech solutions",
      ending: "that connect people."
    },
    {
      id: 4,
      backgroundImage: "/images/innovatebanner.jpeg",
      headline: "Building sustainable",
      subline: "technological infrastructure",
      ending: "for future generations."
    },
    {
      id: 5,
      backgroundImage: "/images/innovatebanner2.png",
      headline: "Fostering global",
      subline: "collaboration through",
      ending: "shared digital platforms."
    }
  ];

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
      setInitialLoad(false);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  // Intersection Observer for trust badges
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setBadgesInView(true);
        }
      },
      {
        threshold: 0.5,
      }
    );

    if (badgesRef.current) {
      observer.observe(badgesRef.current);
    }

    return () => {
      if (badgesRef.current) {
        observer.unobserve(badgesRef.current);
      }
    };
  }, []);

  // Animation configuration for text
  const textAnimation = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "backOut"
      }
    }
  };

  const renderText = (text: string, className: string, delay: number = 0) => {
    return currentSlide === 0 && initialLoad ? (
      <motion.div
        initial="hidden"
        animate="visible"
        variants={textAnimation}
        transition={{ delay }}
        className={className}
      >
        {text}
      </motion.div>
    ) : (
      <div className={className}>{text}</div>
    );
  };

  return (
    <section className="relative w-full">
      {/* Carousel Section */}
      <div className="relative h-[750px] overflow-hidden">
        {/* Slides Container */}
        <div className="flex w-full h-full">
          {slides.map((slide, index) => (
            <div 
              key={slide.id}
              className={`absolute inset-0 w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
              {/* Background Image */}
              <div 
                className="absolute inset-0 bg-center bg-cover"
                style={{ backgroundImage: `url('${slide.backgroundImage}')` }}
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50" />
              
              {/* Slide Content */}
              <div className="relative flex items-center justify-center h-full">
                <div className="px-4 text-center max-w-15xl">
                  {renderText(
                    slide.headline, 
                    "text-3xl font-bold text-white md:text-5xl"
                  )}
                  {renderText(
                    slide.subline, 
                    "mt-4 text-3xl font-bold text-purple-300 md:text-5xl",
                    0.2
                  )}
                  {renderText(
                    slide.ending, 
                    "mt-4 text-3xl font-bold text-white md:text-5xl",
                    0.4
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Dots */}
        <div className="absolute left-0 right-0 flex justify-center gap-3 mb-10 bottom-32">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentSlide(index);
                setInitialLoad(false);
              }}
              className={`rounded-full transition-all duration-300 ${
                currentSlide === index 
                  ? "w-4 h-4 bg-white" 
                  : "w-3 h-3 bg-white bg-opacity-50 hover:bg-opacity-75"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Feature Section */}
      <div className="relative w-full px-4 py-12 mx-auto -mt-12 bg-[#F2F6FF] rounded-t-[40px]">
        {/* Logo at the center */}
        <div className="absolute transform -translate-x-1/2 bg-[#F2F6FF] rounded-full left-1/2 -top-12 md:-top-16">
          <img src="/images/Frame1.png" alt="Logo" className="w-24 h-24 md:w-32 md:h-32" />
        </div>

        {/* Blue Content Card - Removed bounce effect */}
        <div className="relative mx-auto w-[90%] max-w-[1600px] p-6 md:p-10 mb-10 md:mb-16 mt-12 md:mt-16 text-white bg-[#4A3AFF] shadow-md rounded-[30px] md:rounded-[50px] h-auto md:h-[500px] flex flex-col justify-between">
          {/* Text Content */}
          <div className="flex flex-col gap-6 mt-6 md:gap-8 md:mt-10 md:flex-row">
            <div className="flex items-start w-full md:w-1/3">
              <h2 className="text-3xl font-bold leading-tight text-left md:text-4xl">
                We bring a lot hope for the future
              </h2>
            </div>
            <div className="flex items-start w-full md:w-2/3">
              <p className="text-xl leading-normal text-left md:text-2xl">
                We are committed to advancing digital literacy and technological
                empowerment through innovative programs and impactful partnerships.
                Our initiatives are designed to bridge the digital divide, foster
                inclusivity, and create opportunities for individuals and communities
                to thrive in the digital age.
              </p>
            </div>
          </div>
          
          {/* Trust Badges with sequential pop animation */}
          <div ref={badgesRef} className="flex flex-col justify-center gap-4 my-6 md:flex-row md:justify-start md:gap-10 md:mb-10">
            <motion.div
              initial={{ scale: 0 }}
              animate={badgesInView ? { scale: 1 } : {}}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.1
              }}
              className="flex items-center justify-center py-2 md:py-3 text-base md:text-lg text-[#379966] bg-white border-4 border-white px-6 md:px-[50px] rounded-3xl"
            >
              <CheckCircle className="mr-2" size={18} /> Trusted Community
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={badgesInView ? { scale: 1 } : {}}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.3
              }}
              className="flex items-center justify-center py-2 md:py-3 text-base md:text-lg text-[#379966] bg-white border-4 border-white px-6 md:px-[50px] rounded-3xl"
            >
              <CheckCircle className="mr-2" size={18} /> Full Documentary
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={badgesInView ? { scale: 1 } : {}}
              transition={{ 
                type: "spring",
                stiffness: 260,
                damping: 20,
                delay: 0.5
              }}
              className="flex items-center justify-center py-2 md:py-3 text-base md:text-lg text-[#379966] bg-white border-4 border-white px-6 md:px-[50px] rounded-3xl"
            >
              <CheckCircle className="mr-2" size={18} /> Non-Profit Community
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
