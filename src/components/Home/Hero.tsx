import React from 'react';

const Hero = () => {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-style-six relative pt-[110px] min-h-[1006px] bg-cover bg-center bg-no-repeat z-10" 
               style={{ backgroundImage: "url(/images/hero.png)" }}>
        <div className="container px-4 mx-auto">
          <div className="hero_wrap">
            <div className="flex flex-wrap items-center row">
              <div className="w-full lg:w-1/2">
                <div className="xb-hero pt-[93px]">
                  <h1 className="xb-item--title text-white text-[72px] leading-[90px] mb-[30px] font-medium animate-fadeInUp"
                      data-wow-delay="0ms" 
                      data-wow-duration="600ms">
                    Turning Purpose into Lasting Impact
                  </h1>
                  
                  <p className="xb-item--content text-white text-[24px] leading-[40px] max-w-[545px] font-medium mb-0 animate-fadeInUp"
                     data-wow-delay="150ms" 
                     data-wow-duration="600ms">
                    At United Impact Solutions, we're a purpose-driven, people-powered consultancy on a mission to help changemakers develop innovative, financially sustainable solutions that uplift communities and create real social impact.
                  </p>
                  
                  <div className="xb-btn mt-[50px] animate-fadeInUp" 
                       data-wow-delay="300ms" 
                       data-wow-duration="600ms">
                    <a href="contact.html" className="inline-flex items-center px-6 py-3 text-white transition-colors duration-300 bg-blue-800 border-2 border-blue-800 rounded-full hover:bg-white hover:text-blue-800">
                      <span className="mr-2">Book a Discover Call</span>
                      <div className="flex items-center justify-center w-6 h-6 bg-white rounded-full group-hover:bg-blue-800">
                        <svg className="w-3 h-3 text-blue-800 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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