// import React from "react";
import { motion } from "framer-motion";

const MissionSection = () => {
  return (
    <section className="px-6 py-20 text-center text-white bg-blue-700">
      <div className="max-w-5xl mx-auto">
        <h2 className="mb-6 text-4xl font-bold">Our Mission</h2>
        <p className="mb-12 text-lg leading-relaxed md:text-xl">
          We harness the power of technology and innovation to drive sustainable development, bridge digital divides, and empower communities worldwide. We are committed to advancing education, fostering inclusivity, and enabling solutions that address global challenges through ethical and responsible technological practices.
        </p>
      </div>
      <div className="grid max-w-6xl grid-cols-1 gap-8 mx-auto md:grid-cols-4">
        {cards.map((card, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 50 }} 
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ 
              type: "spring", 
              stiffness: 150, // Adjusts the bounce intensity
              damping: 10, // Controls how fast it settles
              delay: index * 0.2 // Staggered appearance
            }}
            className="flex flex-col items-center p-8 rounded-lg shadow-lg h-72"
            style={{ backgroundColor: '#3629C3' }}  
          >
            <div className="relative flex items-center justify-center mb-10">
              <div className="absolute w-24 h-24 bg-white rounded-full opacity-200"></div>
              <img 
                src={card.icon} 
                alt={card.label} 
                className="relative z-10 object-contain w-16 h-16" 
              />
            </div>
            <div className="mt-6 space-y-2">
              <h3 className="text-3xl font-bold">{card.stat}</h3>
              <p className="pt-2 text-lg">{card.label}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <button className="px-8 py-4 text-lg font-bold text-white transition bg-blue-700 border-2 border-white rounded-full shadow-lg mt-14 hover:bg-blue-800">
        Learn More
      </button>
    </section>
  );
};

const cards = [
  { 
    icon: "/public/images/human_mind_state_icon.png", 
    stat: "20+", 
    label: "Years of Experience" 
  },
  { 
    icon: "/public/images/success_tick_icon.png", 
    stat: "1,569", 
    label: "Successful Charities" 
  },
  { 
    icon: "/public/images/dollar_money_sign_icon.png", 
    stat: "$80M", 
    label: "Charitable Support" 
  },
  { 
    icon: "/public/images/mountain top_opportunity_icon.png", 
    stat: "50+", 
    label: "Communities Reached" 
  },
];

export default MissionSection;
