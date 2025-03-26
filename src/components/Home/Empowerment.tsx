import React from "react";

const EmpowermentSection = () => {
  return (
    <div className="relative w-full min-h-[800px]">
      {/* Background image with overlay */}
      <div className="absolute inset-0 bg-black/20">
        <img
          src="/images/empimg.png"
          alt="Students working on computers"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content container - positioned at bottom with left alignment */}
      <div className="absolute bottom-0 left-0 w-full">
        <div className="container mx-auto px-6 md:px-16 lg:px-24">
          <div className="w-full md:w-5/6 lg:w-4/5 bg-white shadow-lg p-10 py-20 rounded-t-lg ml-[-20px]"> {/* Changed to rounded-t-lg */}
            {/* Thicker and longer red horizontal line above heading */}
            <div className="border-t-[6px] border-red-500 w-24 mb-6"></div>
            
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Empowerment Through Technology
            </h2>
            
            <p className="mt-8 text-gray-700 text-lg md:text-xl">
              Equip people with skills in coding, data analysis, AI, and other tech areas to enhance employability and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmpowermentSection;