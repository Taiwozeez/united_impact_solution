
const Footer = () => {
  return (
    <footer className="footer pb-[80px] bg-cover bg-center relative" style={{ backgroundImage: "url('assets/img/bg/da-footer.jpg')" }}>
      {/* Marquee Title */}
      <div className="py-8 overflow-hidden da-footer-title">
        <h2 className="title text-[150px] font-extrabold text-[#1438bc] tracking-tight whitespace-nowrap animate-marquee">
          <a href="/contact.html" className="inline-block">
            Book a Discovery Call Now
            <span className="text-transparent ml-[30px] [-webkit-text-stroke:2px_#1438BC]">Empower Your Mission—Let's Create Change Together.</span>
          </a>
        </h2>
      </div>

      <div className="container px-4 mx-auto">
        <div className="bg-white mt-[117px] px-[105px] py-[78px] rounded-3xl shadow-[0_19px_28px_0_rgba(25,28,51,0.05)]">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row">
            {/* Logo & Tagline */}
            <div className="flex-1">
              <div className="inline-block mt-[20px]">
                <a href="index.html">
                  <img src="images/logo07.svg" alt="United Impact Solutions Logo" className="h-auto" />
                </a>
              </div>
              <p className="font-semibold text-xs bg-[#f4f5fc] px-[17px] py-[6px] rounded-full shadow-[0_1px_2px_0_rgba(0,0,0,0.06),0_0_0_1px_rgba(0,0,0,0.06)] mt-[20px] inline-block">
                We collaborate with nonprofits, entrepreneurs, and businesses to create meaningful change in our communities.
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex-1">
              <ul className="flex flex-wrap gap-[51px] list-none">
                {['About', 'Services', 'Impact Stories', 'Resources', 'Contact'].map((item) => (
                  <li key={item} className="relative group">
                    <a 
                      href={item === 'About' ? '/about.html' : item === 'Contact' ? '/contact.html' : '#!'}
                      className="font-extrabold text-base text-current group-hover:text-[#1438bc] transition-colors"
                    >
                      {item}
                    </a>
                    <div className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#1438bc] opacity-0 group-hover:w-full group-hover:opacity-100 transition-all duration-300"></div>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-[#e3e3e3] pt-[35px] mt-[40px] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#212877]">
              ©2025 <a href="index.html" className="hover:underline">United Impact Solutions</a>. All rights reserved.
            </p>
            <ul className="flex gap-4">
              <li className="relative pr-4">
                <a href="#!" className="text-[#212877] hover:underline">Terms of Service</a>
                <span className="absolute right-0 top-1/2 -translate-y-1/2 w-0.5 h-0.5 bg-[#212877] rounded-full"></span>
              </li>
              <li>
                <a href="#!" className="text-[#212877] hover:underline">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Marquee Animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-block;
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;