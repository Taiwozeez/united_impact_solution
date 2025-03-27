// import React from 'react';

const InnovateHub = () => {
  return (
    <div className="flex flex-col min-h-screen md:flex-row" style={{ backgroundColor: '#4A3AFF' }}>
      {/* Left content section */}
      <div className="flex flex-col justify-center w-full p-8 md:w-1/2 md:p-12">
        <div className="max-w-md mx-auto text-white">
          {/* Welcome text at the very top */}
          <p className="mb-1 text-xs tracking-widest uppercase">Welcome to</p>
          <h1 className="mb-2 text-4xl font-bold md:text-5xl">InnovateHub</h1>
          <p className="mb-8 text-xl md:text-2xl">where technology meets empowerment!</p>
          
          <div className="space-y-6">
            <p className="mb-6">
              We are a forward-thinking foundation committed to engaging the digital culture and unlocking potential for investor relationships. At innovation, we believe that innovation is the key to opportunity, and our mission is to ensure that no one is just behind in the digital world. Whether you can be trusted or agile in terms of skills, or financial standing to simplify your impacts on a community bearing its ethics through technological resources, innovations in your trusted partner.
            </p>
            
            <p>
              Together, we're just solving problems – we're creating possibilities: where we're building a network, more connected issues for all.
            </p>
          </div>
          
          {/* Button with custom blue color and white border */}
          <button 
            className="px-8 py-3 mt-8 font-bold text-white transition duration-300 border-2 border-white rounded-full shadow-lg"
            style={{ backgroundColor: '#4A3AFF' }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Right image section */}
      <div className="relative w-full md:w-1/2">
        <div className="absolute inset-0 bg-white rounded-l-[30px] md:rounded-l-[40px] overflow-hidden">
          <div className="absolute inset-0 flex items-center pl-8 pr-0 md:pl-12">
            <div className="h-[80vh] w-full rounded-l-[30px] md:rounded-l-[40px] overflow-hidden shadow-xl">
              <img 
                src="/public/images/techimg.png" 
                alt="Technology Innovation"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovateHub;