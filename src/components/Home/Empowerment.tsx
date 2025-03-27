import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EmpowermentSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="relative w-full min-h-[800px]">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black/20">
        <img
          src="/images/empimg.png"
          alt="Students working on computers"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Content container - positioned at bottom with left alignment */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="container px-6 mx-auto md:px-16 lg:px-24">
          <motion.div 
            ref={ref}
            initial={{ x: -200, opacity: 0 }}
            animate={isInView ? { 
              x: 0, 
              opacity: 1,
              transition: {
                type: "spring",
                stiffness: 100,
                damping: 10,
                mass: 1,
                velocity: 0
              }
            } : {}}
            className="w-full md:w-5/6 lg:w-4/5 bg-white shadow-lg p-10 py-20 rounded-t-lg ml-[-20px]"
          >
            {/* Thicker and longer red horizontal line above heading */}
            <motion.div 
              initial={{ scaleX: 0 }}
              animate={isInView ? { 
                scaleX: 1,
                transition: {
                  delay: 0.3,
                  duration: 0.6
                }
              } : {}}
              className="border-t-[6px] border-red-500 w-24 mb-6 origin-left"
            ></motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 0.5,
                  duration: 0.6
                }
              } : {}}
              className="text-3xl font-bold text-gray-900 md:text-4xl"
            >
              Empowerment Through Technology
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { 
                opacity: 1, 
                y: 0,
                transition: {
                  delay: 0.7,
                  duration: 0.6
                }
              } : {}}
              className="mt-8 text-lg text-gray-700 md:text-xl"
            >
              Equip people with skills in coding, data analysis, AI, and other tech areas to enhance employability and innovation.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default EmpowermentSection;
