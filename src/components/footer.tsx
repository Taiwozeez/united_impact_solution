import React from "react";

const SubscribeSection = () => {
  // Social media icons data
  const socialIcons = [
    { name: "facebook", src: "/public/images/evelopeicon.png" },
    { name: "twitter", src: "/public/images/calendaricon.png" },
    { name: "instagram", src: "/public/images/chatincon.png" },
    { name: "linkedin", src: "/public/images/securityicon.png" },
    { name: "linkedin", src: "/public/images/timeicon.png" },
  ];

  return (
    <div className="w-full pt-16 pb-16 text-white bg-[#222629]">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 md:px-8">
        <div className="bg-[#4A3AFF] rounded-lg p-6 md:p-16 mb-12 md:mb-16 text-center">
          <button className="px-6 py-3 mb-6 text-sm text-white bg-indigo-800 rounded-full">
            Subscribe to our Community
          </button>
          <h2 className="mb-4 text-2xl font-bold md:text-3xl">Join Our Community to Get Informed</h2>
          
          {/* Mobile-optimized input and button */}
          <div className="flex flex-col items-center max-w-4xl mx-auto mt-8 md:block">
            <div className="relative w-full">
              <input
                type="email"
                className="w-full h-14 md:h-16 pl-4 pr-32 md:pl-8 md:pr-28 py-3 text-white outline-none text-base md:text-lg bg-[#4A3AFF] placeholder-white border-2 border-white rounded-full"
                placeholder="Email Address"
              />
              <button className="absolute top-1/2 right-1 transform -translate-y-1/2 bg-white text-[#4A3AFF] px-4 md:px-8 font-bold text-sm md:text-lg hover:bg-gray-200 transition rounded-full border-2 border-white h-10 md:h-14">
                Subscribe
              </button>
            </div>
          </div>
          
          <p className="max-w-2xl mx-auto mt-8 text-base text-blue-100 md:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In convallis, ex sed ultricies feugiat, enim elit interdum quam, et vulputate justo ex ut diam.
          </p>
        </div>

        <div className="py-8 text-center md:py-12">
          <div className="flex flex-wrap justify-center gap-4 mb-6 text-base text-gray-300 md:gap-8 md:text-lg md:mb-8">
            <a href="#" className="hover:text-white">Service</a>
            <a href="#" className="hover:text-white">Support</a>
            <a href="#" className="hover:text-white">Company</a>
            <a href="#" className="hover:text-white">Legal</a>
            <a href="#" className="hover:text-white">Join Us</a>
          </div>

          {/* Social media icons */}
          <div className="flex justify-center gap-4 mb-6 md:gap-6 md:mb-8">
            {socialIcons.map((icon) => (
              <div 
                key={icon.name}
                className="w-8 h-8 md:w-10 md:h-10 bg-[#3B4857] rounded-full flex items-center justify-center hover:bg-opacity-90 transition-all cursor-pointer"
              >
                <img 
                  src={icon.src} 
                  alt={icon.name} 
                  className="object-contain w-4 h-4 md:w-5 md:h-5" 
                />
              </div>
            ))}
          </div>

          <p className="text-sm text-gray-500 md:text-md">
            Designed By &copy; Edoubleone inc 2025. All right reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;