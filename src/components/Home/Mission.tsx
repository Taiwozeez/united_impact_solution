// import React from "react";

const MissionSection = () => {
  return (
    <section className="bg-blue-700 text-white py-20 px-6 text-center">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
        <p className="text-lg md:text-xl leading-relaxed mb-12">
          We harness the power of technology and innovation to drive sustainable development, bridge digital divides, and empower communities worldwide. We are committed to advancing education, fostering inclusivity, and enabling solutions that address global challenges through ethical and responsible technological practices.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {cards.map((card, index) => (
          <div 
            key={index} 
            className="p-8 rounded-lg shadow-lg h-72 flex flex-col items-center"
            style={{ backgroundColor: '#3629C3' }}  
          >
            <div className="relative flex items-center justify-center mb-10">
              <div className="absolute w-24 h-24 bg-white rounded-full opacity-200"></div>
              <img 
                src={card.icon} 
                alt={card.label} 
                className="h-16 w-16 object-contain relative z-10" 
              />
            </div>
            <div className="mt-6 space-y-2">
              <h3 className="text-3xl font-bold">{card.stat}</h3>
              <p className="text-lg pt-2">{card.label}</p>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-14 px-8 py-4 bg-blue-700 text-white font-bold rounded-full shadow-lg hover:bg-blue-800 transition text-lg border-2 border-white">
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
