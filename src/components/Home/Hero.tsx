// import React from 'react';

const Hero = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-style-six relative pt-[80px] md:pt-[110px] min-h-[600px] md:min-h-[1006px] bg-cover bg-center bg-no-repeat z-10" 
               style={{ backgroundImage: "url(/images/hero.png)" }}>
        <div className="container px-4 mx-auto">
          <div className="hero_wrap">
            <div className="flex flex-wrap items-center row">
              <div className="w-full lg:w-1/2">
                <div className="xb-hero pt-[40px] md:pt-[93px]">
                  <h1 className="xb-item--title text-white text-[36px] leading-[48px] md:text-[72px] md:leading-[90px] mb-[20px] md:mb-[30px] font-medium animate-fadeInUp"
                      data-wow-delay="0ms" 
                      data-wow-duration="600ms">
                    Turning Purpose into Lasting Impact
                  </h1>
                  
                  <p className="xb-item--content text-white text-[18px] leading-[28px] md:text-[24px] md:leading-[40px] max-w-full md:max-w-[545px] font-medium mb-0 animate-fadeInUp"
                     data-wow-delay="150ms" 
                     data-wow-duration="600ms">
                    At United Impact Solutions, we're a purpose-driven, people-powered consultancy on a mission to help changemakers develop innovative, financially sustainable solutions that uplift communities and create real social impact.
                  </p>
                  
                  <div className="xb-btn mt-[30px] md:mt-[50px] animate-fadeInUp" 
                       data-wow-delay="300ms" 
                       data-wow-duration="600ms">
                    <a href="contact.html" className="inline-flex items-center px-5 py-2 text-white transition-colors duration-300 bg-blue-800 border-2 border-blue-800 rounded-full md:px-6 md:py-3 hover:bg-white hover:text-blue-800">
                      <span className="mr-2 text-[16px] md:text-[18px]">Book a Discover Call</span>
                      <div className="flex items-center justify-center w-5 h-5 bg-white rounded-full md:w-6 md:h-6 group-hover:bg-blue-800">
                        <svg className="w-2.5 h-2.5 md:w-3 md:h-3 text-blue-800 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Hero;