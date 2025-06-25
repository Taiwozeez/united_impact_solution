const Footer = () => {
  return (
    <footer
      className="footer pb-[40px] md:pb-[80px] bg-cover bg-center relative"
      style={{ backgroundImage: "url('assets/img/bg/da-footer.jpg')" }}
    >
      {/* Marquee Title */}
      <div className="py-4 overflow-hidden md:py-8 da-footer-title">
        <h2 className="title text-[30px] md:text-[70px] font-extrabold text-[#212877] tracking-tight whitespace-nowrap animate-marquee">
          <a href="/contact.html" className="inline-block">
            Book a Discovery Call Now
            <span className="ml-4">
              Empower Your Mission—Let&apos;s Create Change Together.
            </span>
          </a>
        </h2>
      </div>

      <div className="container px-4 mx-auto">
        <div className="bg-white mt-[60px] md:mt-[117px] px-[20px] md:px-[105px] py-[40px] md:py-[78px] rounded-3xl shadow-[0_19px_28px_0_rgba(25,28,51,0.05)]">
          <div className="flex flex-col items-start justify-between gap-10 md:flex-row">
            {/* Logo & Tagline */}
            <div className="flex-1">
              <a href="index.html">
                <img
                  src="images/logo07.svg"
                  alt="United Impact Solutions Logo"
                  className="h-auto max-w-[180px] md:max-w-none"
                />
              </a>
              <p className="text-[#212877] font-semibold text-xs bg-[#f4f5fc] px-[17px] py-[6px] rounded-full shadow mt-5 inline-block">
                We collaborate with nonprofits, entrepreneurs, and businesses to create meaningful change in our communities.
              </p>

              {/* Navigation placed directly under tagline */}
              <nav className="mt-6">
                <ul className="grid grid-cols-2 gap-4 md:flex md:gap-[51px] list-none">
                  {['About', 'Services', 'Impact Stories', 'Resources', 'Contact'].map((item) => (
                    <li key={item} className="relative group">
                      <a
                        href={
                          item === 'About'
                            ? '/about.html'
                            : item === 'Contact'
                            ? '/contact.html'
                            : '#!'
                        }
                        className="font-bold text-sm md:text-base text-[#212877] group-hover:underline transition-colors"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="border-t border-[#e3e3e3] pt-[20px] md:pt-[35px] mt-[20px] md:mt-[40px] flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#212877] text-sm md:text-base text-center md:text-left">
              ©2025 <a href="index.html" className="hover:underline">United Innovation and Impact Solutions</a>. All rights reserved.
            </p>
            <ul className="flex gap-4">
              <li className="relative pr-4">
                <a href="#!" className="text-[#212877] hover:underline text-sm md:text-base">Terms of Service</a>
              </li>
              <li>
                <a href="#!" className="text-[#212877] hover:underline text-sm md:text-base">Privacy Policy</a>
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
