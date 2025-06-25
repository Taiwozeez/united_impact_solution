import { useEffect, useState } from "react";

const BackToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Toggle visibility on scroll
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className={`fixed bottom-5 right-7 z-[999] transition-all duration-300 ${
        isVisible ? "opacity-100 visible bottom-10" : "opacity-0 invisible"
      }`}
    >
      <button
        onClick={scrollToTop}
        className="w-10 h-10 flex items-center justify-center rounded-md bg-[#2042BF] text-white text-sm hover:mb-1 transition-all"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    </div>
  );
};

export default BackToTop;
