// import React from 'react';

const InnovateHub = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row" style={{ backgroundColor: '#4A3AFF' }}>
      {/* Left content section */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <div className="max-w-md mx-auto text-white">
          {/* Welcome text at the very top */}
          <p className="text-xs uppercase tracking-widest mb-1">Welcome to</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-2">InnovateHub</h1>
          <p className="text-xl md:text-2xl mb-8">where technology meets empowerment!</p>
          
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
            className="mt-8 text-white font-bold py-3 px-8 rounded-full transition duration-300 shadow-lg border-2 border-white"
            style={{ backgroundColor: '#4A3AFF' }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Right image section */}
      <div className="w-full md:w-1/2 relative">
        <div className="absolute inset-0 bg-white rounded-l-[30px] md:rounded-l-[40px] overflow-hidden">
          <div className="absolute inset-0 pl-8 md:pl-12 pr-0 flex items-center">
            <div className="h-[80vh] w-full rounded-l-[30px] md:rounded-l-[40px] overflow-hidden shadow-xl">
              <img 
                src="/public/images/techimg.png" 
                alt="Technology Innovation"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InnovateHub;
