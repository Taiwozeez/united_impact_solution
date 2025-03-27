import React from 'react';

interface CardProps {
  icon: string;
  title: string;
  bgColor: string;
}

const Card: React.FC<CardProps> = ({ icon, title, bgColor }) => {
  return (
    <div className={`p-6 rounded-2xl ${bgColor} text-center sm:text-left w-full max-w-xs sm:max-w-sm min-h-[400px] flex flex-col justify-between mx-auto`}>
      <div>
        <div className="flex justify-center mb-6 sm:justify-start">
          <img src={icon} alt="" className="object-contain w-16 h-16 sm:w-20 sm:h-20" />
        </div>
        <h2 className="mb-4 text-xl font-bold sm:text-2xl">{title}</h2>
        <p className="mb-6 text-sm text-gray-700 sm:text-lg">
          We are committed to advancing digital literacy and technological empowerment 
          through innovative programs and impactful partnerships. Our initiatives are 
          designed to bridge the digital divide, foster inclusivity, and...
        </p>
      </div>
      <a href="#" className="text-sm font-bold text-green-600 sm:text-lg hover:underline">
        Learn More
      </a>
    </div>
  );
};

export default function InfoCards() {
  const cards: CardProps[] = [
    { icon: "/images/darticon.png", title: "Our Purpose", bgColor: "bg-red-100" },
    { icon: "/images/globeicon.png", title: "Our Network", bgColor: "bg-blue-100" },
    { icon: "/images/peopleicon.png", title: "For young people", bgColor: "bg-purple-100" },
  ];

  return (
    <div className="grid max-w-6xl gap-6 p-6 mx-auto sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((card, index) => (
        <Card key={index} {...card} />
      ))}
    </div>
  );
}
