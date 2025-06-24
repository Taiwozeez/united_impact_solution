const About = () => {
  return (
    <>
      {/* About Section - Adjusted padding for mobile */}
      <section className="pt-12 md:pt-24 pb-12 md:pb-16 about">
        <div className="container px-4 mx-auto">
          <div className="flex flex-wrap row">
            {/* Left Column */}
            <div className="w-full lg:w-1/2">
              <div className="relative da-about-left">
                <h2 className="title text-[32px] leading-[40px] md:text-[50px] md:leading-[64px] text-[#212877] font-medium mb-4">
                  Well-harnessed data <br /> 
                  fuels meaningful <br /> 
                  social impact.
                </h2>
                {/* Hide image on mobile, show from lg breakpoint */}
                <div className="img ml-[-30px] mt-8 md:mt-[130px] hidden lg:block">
                  <img 
                    src="/images/about-glassisom.png" 
                    alt="Data visualization" 
                    className="max-w-full"
                  />
                </div>
              </div>
            </div>

            {/* Right Column - Adjusted spacing for mobile */}
            <div className="w-full pt-6 lg:w-1/2">
              <div className="relative z-10 da-about-right">
                <p className="content text-[18px] leading-[28px] md:text-[24px] md:leading-[40px] font-normal text-[#212877]">
                  At United Impact Solutions, we're a purpose-driven, people-powered consultancy dedicated to turning insights into action. Our mission is to help organizations, nonprofits, and social entrepreneurs develop innovative, financially sustainable solutions that address real community needs.
                </p>
                {/* Adjusted paragraph spacing for mobile */}
                <p className="content text-[18px] leading-[28px] md:text-[24px] md:leading-[40px] font-normal text-[#212877] my-6 md:my-[28px]">
                  We partner with government agencies, impact-focused businesses, and civic leaders to deliver scalable strategies for positive change. 
                </p>
                <p className="content text-[18px] leading-[28px] md:text-[24px] md:leading-[40px] font-normal text-[#212877]">
                  By strengthening leadership capacity and investing in collaborative partnerships, we empower clients to create lasting impact—and ultimately, transform the world for the better.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;