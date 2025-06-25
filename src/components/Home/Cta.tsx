const Cta = () => {
  return (
    <section className="w-full">
      <div className="flex flex-wrap md:flex-nowrap">
        {/* Quote Section */}
        <div
          className={`
            w-full md:w-[59.1%] min-h-[645px] bg-[#1438bc] flex items-center
            px-5 sm:px-10 lg:px-[50px] xl:px-[165px] 2xl:pl-[240px] py-[93px] 2xl:py-[100px]
          `}
        >
          <div className="max-w-3xl">
            <span className="block mb-6">
              <img src="/images/quote02.png" alt="Quote" />
            </span>
            <p
              className={`
                text-white font-medium mt-10 mb-8
                text-[26px] leading-[42px] 
                md:text-[45px] md:leading-[58px] md:tracking-[-0.01em]
              `}
            >
              “I started United Impact Solutions because I believe business should be a force for good. Our work is
              about helping socially minded entrepreneurs create real, measurable change for their communities because
              when our impact grows, everyone wins.”
            </p>

            <div className="flex items-center gap-6 mt-[50px]">
              {/* ✅ Increased avatar size from 64px → 80px */}
              <div className="inline-block border-[3px] border-[#53baff] rounded-full overflow-hidden w-[80px] h-[80px]">
                <img src="/images/da-img_1.png" alt="Author" className="object-cover w-full h-full" />
              </div>
              <div>
                <h3 className="text-white font-medium text-[22px] mb-[5px]">Onyedikachi Agbiogwu</h3>
                <span className="text-[#c4cdec] text-sm block">Founder - United Impact Solutions</span>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div
          className={`
            w-full md:w-[40.9%] bg-[#53baff] flex items-center
            px-5 sm:px-[30px] md:px-[50px] xl:px-[135px]
            py-[50px] md:py-[60px] h-auto md:h-[660px]
            md:mt-[170px]   /* ✅ Added top margin to push it down */
          `}
        >
          <div>
            <h2
              className={`
                text-white font-semibold
                text-[36px] leading-[48px] tracking-[-0.02em]
                xl:text-[45px] xl:leading-[60px]
              `}
            >
              Partner With Us To<br />
              Unlock The Full Potential<br />
              Of Your Mission.
            </h2>
            <div className="mt-10">
              <a
                href="#!"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#53baff] font-semibold rounded-full shadow hover:bg-gray-100 transition"
              >
                <span>Book a Discover Call</span>
                <i className="fal fa-plus" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
