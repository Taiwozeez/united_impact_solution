import React from 'react';

const Feature = () => {
  return (
    <section className="feature pt-[150px] pb-[150px] bg-[#f4f5fc]">
      <div className="px-0 container-fluid">
        {/* Section Header */}
        <div className="flex justify-center row">
          <div className="w-full lg:w-8/12 xl:w-5/12">
            <div className="da-sec-titlte text-center mb-[70px]">
              <span className="sub_title flex items-center justify-center text-[#212877] font-medium">
                <span className="mr-2">
                  <img src="/images/flower-icon-blue.svg" alt="Flower icon" className="w-5" />
                </span>
                About
              </span>
              <h2 className="title text-[50px] leading-[64px] font-bold text-[#212877] mt-4">
                What We Do
              </h2>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="da-feature-wrap bg-[#D5DCF7] border-t border-b border-[#D5DCF7]">
          <div className="flex flex-wrap row">
            {/* Feature 1 - Economic Growth */}
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-4/12 fea-col">
              <div className="da-feature-item bg-[#f4f5fc] hover:bg-white rounded-r-none lg:rounded-r-[10px] transition-all duration-300 p-[68px_100px_40px_46px] lg:mr-[66px]">
                <div className="xb-item--holder pl-[215px] lg:pl-0">
                  <div className="flex xb-item--icon">
                    <img src="/images/da-fea_icon01.svg" alt="Economic Growth icon" />
                  </div>
                  <h3 className="xb-item--title text-[38px] leading-[50px] font-normal text-[#212877] mt-[35px] mb-[28px]">
                    Economic Growth
                  </h3>
                  <p className="xb-item--content text-[16px] leading-[187%] font-normal text-[#212877]">
                    We empower communities and businesses to foster inclusive prosperity and create sustainable resilience.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 2 - Driving Innovation */}
            <div className="w-full md:w-1/2 lg:w-1/6 xl:w-2/12 fea-col">
              <div className="da-feature-item bg-[#f4f5fc] hover:bg-white transition-all duration-300 p-[68px_100px_40px_46px] lg:ml-[-65px] lg:mr-[1px]">
                <div className="xb-item--holder">
                  <div className="flex xb-item--icon">
                    <img src="/images/da-fea_icon02.svg" alt="Driving Innovation icon" />
                  </div>
                  <h3 className="xb-item--title text-[38px] leading-[50px] font-normal text-[#212877] mt-[35px] mb-[28px]">
                    Driving Innovation
                  </h3>
                  <p className="xb-item--content text-[16px] leading-[187%] font-normal text-[#212877]">
                    We champion fresh thinking and emerging technologies to develop forward-thinking solutions for social impact.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 3 - Social Support */}
            <div className="w-full md:w-1/2 lg:w-1/6 xl:w-2/12 fea-col">
              <div className="da-feature-item bg-[#f4f5fc] hover:bg-white transition-all duration-300 p-[68px_100px_40px_46px] lg:mr-[-65px]">
                <div className="xb-item--holder">
                  <div className="flex xb-item--icon">
                    <img src="/images/da-fea_icon03.svg" alt="Social Support icon" />
                  </div>
                  <h3 className="xb-item--title text-[38px] leading-[50px] font-normal text-[#212877] mt-[35px] mb-[28px]">
                    Social Support
                  </h3>
                  <p className="xb-item--content text-[16px] leading-[187%] font-normal text-[#212877]">
                    We strengthen community networks and expand access to vital services, ensuring everyone has a path to thrive.
                  </p>
                </div>
              </div>
            </div>

            {/* Feature 4 - Online Learning */}
            <div className="w-full md:w-1/2 lg:w-1/3 xl:w-4/12 fea-col">
              <div className="da-feature-item bg-[#f4f5fc] hover:bg-white rounded-l-none lg:rounded-l-[10px] transition-all duration-300 p-[68px_100px_40px_46px] lg:ml-[66px]">
                <div className="xb-item--holder pr-[215px] lg:pr-0">
                  <div className="flex xb-item--icon">
                    <img src="/images/da-fea_icon04.svg" alt="Online Learning icon" />
                  </div>
                  <h3 className="xb-item--title text-[38px] leading-[50px] font-normal text-[#212877] mt-[35px] mb-[28px]">
                    Online Learning
                  </h3>
                  <p className="xb-item--content text-[16px] leading-[187%] font-normal text-[#212877]">
                    We provide accessible training and coaching that equip changemakers with the skills needed to lead effectively.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="xb-btn text-center mt-[70px]">
          <a href="#!" className="inline-flex items-center px-6 py-3 text-white bg-[#212877] border-2 border-[#212877] rounded-full hover:bg-white hover:text-[#212877] transition-colors duration-300">
            <span className="mr-2">Book a Discover Call</span>
            <div className="flex items-center justify-center w-6 h-6 rounded-full group-hover:bg-[#212877] bg-white">
              <svg className="w-3 h-3 group-hover:text-white text-[#212877]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Feature;