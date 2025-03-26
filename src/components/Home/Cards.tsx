import React from 'react';

interface CardProps {
  icon: string;
  title: string;
  bgColor: string;
}

const Card: React.FC<CardProps> = ({ icon, title, bgColor }) => {
  return (
    <div className={`p-8 rounded-2xl ${bgColor} text-center w-full sm:w-[34%] h-[500px] flex flex-col justify-between mx-auto max-w-sm`}>
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
      <a href="#" className="text-lg font-bold text-green-600 hover:underline">
        Learn More
      </a>
    </div>
  );
};

export default function InfoCards() {
  const cards: CardProps[] = [
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
        <Card key={index} {...card} />
      ))}
    </div>
  );
}