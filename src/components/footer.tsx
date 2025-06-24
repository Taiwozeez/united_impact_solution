const Footer = () => {
  return (
    <footer className="footer pb-[40px] md:pb-[80px] bg-cover bg-center relative" style={{ backgroundImage: "url('assets/img/bg/da-footer.jpg')" }}>
      {/* Marquee Title - Adjusted for mobile */}
      <div className="py-4 md:py-8 overflow-hidden da-footer-title">
        <h2 className="title text-[40px] md:text-[150px] font-extrabold text-[#1438bc] tracking-tight whitespace-nowrap animate-marquee">
          <a href="/contact.html" className="inline-block">
            Book a Call
            <span className="hidden sm:inline">
              <span className="ml-[10px] md:ml-[30px]">Now</span>
              <span className="text-transparent ml-[10px] md:ml-[30px] [-webkit-text-stroke:1px_#1438BC] md:[-webkit-text-stroke:2px_#1438BC]">
                Empower Your Mission
              </span>
            </span>
          </a>
        </h2>
      </div>

      <div className="container px-4 mx-auto">
        <div className="bg-white mt-[60px] md:mt-[117px] px-[20px] md:px-[105px] py-[40px] md:py-[78px] rounded-3xl shadow-[0_19px_28px_0_rgba(25,28,51,0.05)]">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
            {/* Logo & Tagline */}
            <div className="flex-1">
              <div className="inline-block mt-0 md:mt-[20px]">
                <a href="index.html">
                  <img src="images/logo07.svg" alt="United Impact Solutions Logo" className="h-auto max-w-[180px] md:max-w-none" />
                </a>
              </div>
              <p className="font-semibold text-xs bg-[#f4f5fc] px-[17px] py-[6px] rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.06)] mt-[20px] inline-block">
                We collaborate with nonprofits, entrepreneurs, and businesses to create meaningful change in our communities.
              </p>
            </div>

            {/* Navigation - Adjusted for mobile */}
            <nav className="flex-1 w-full md:w-auto">
              <ul className="grid grid-cols-2 gap-4 md:flex md:flex-wrap md:gap-[51px] list-none">
                {['About', 'Services', 'Impact Stories', 'Resources', 'Contact'].map((item) => (
                  <li key={item} className="relative group">
                    <a 
                      href={item === 'About' ? '/about.html' : item === 'Contact' ? '/contact.html' : '#!'}
                      className="font-extrabold text-sm md:text-base text-current group-hover:text-[#1438bc] transition-colors"
                    >
                      {item}
                    </a>
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#1438bc] opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Footer Bottom - Adjusted for mobile */}
          <div className="border-t border-[#e3e3e3] pt-[20px] md:pt-[35px] mt-[20px] md:mt-[40px] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#212877] text-sm md:text-base text-center md:text-left">
              ©2025 <a href="index.html" className="hover:underline">United Impact Solutions</a>. All rights reserved.
            </p>
            <ul className="flex gap-4">
              <li className="relative pr-4">
                <a href="#!" className="text-[#212877] hover:underline text-sm md:text-base">Terms</a>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-0.5 bg-[#212877] rounded-full"></span>
              </li>
              <li>
                <a href="#!" className="text-[#212877] hover:underline text-sm md:text-base">Privacy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
        @media (max-width: 768px) {
          .animate-marquee {
            animation-duration: 15s;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;