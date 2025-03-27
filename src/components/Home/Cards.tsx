import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  icon: string;
  title: string;
  bgColor: string;
  index: number;
}

// Animation Variants with Bounce Effect
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 120, // Controls the bounciness (higher = stiffer)
      damping: 10, // Controls how fast it settles (lower = more bounce)
      delay: index * 0.2, // Staggered reveal
    },
  }),
};

const Card: React.FC<CardProps> = ({ icon, title, bgColor, index }) => {
  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      custom={index} // Pass the index for staggered delay
      className={`p-8 rounded-2xl ${bgColor} text-center w-full sm:w-[34%] h-[500px] flex flex-col justify-between mx-auto max-w-sm`}
    >
      <div>
        <div className="flex justify-center mb-8">
          <img src={icon} alt="" className="object-contain w-20 h-20" />
        </div>
        <h2 className="mb-6 text-2xl font-bold">{title}</h2>
        <p className="mb-8 text-lg text-gray-700">
          We are committed to advancing digital literacy and technological empowerment 
          through innovative programs and impactful partnerships. Our initiatives are 
          designed to bridge the digital divide, foster inclusivity,.....
        </p>
      </div>
      <a href="#" className="self-center mb-4 text-lg font-bold text-green-600 hover:underline">
        Learn More
      </a>
    </motion.div>
  );
};

export default function InfoCards() {
  const cards = [
    {
      icon: "/images/darticon.png",
      title: "Our Purpose",
      bgColor: "bg-red-100",
    },
    {
      icon: "/images/globeicon.png",
      title: "Our Network",
      bgColor: "bg-blue-100",
    },
    {
      icon: "/images/peopleicon.png",
      title: "For young people",
      bgColor: "bg-purple-100",
    },
  ];

  return (
    <div className="flex flex-col items-stretch justify-center max-w-6xl gap-6 p-8 mx-auto sm:flex-row">
      {cards.map((card, index) => (
        <Card key={index} {...card} index={index} />
      ))}
    </div>
  );
}
