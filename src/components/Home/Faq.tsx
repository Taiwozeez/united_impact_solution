import { useState } from 'react';

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start with question 2 active (0-based index would be 1)

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const leftFaqs = [
    {
      id: 1,
      question: "What services does United Impact Solutions offer?",
      answer: "We provide a range of services to empower social enterprises and community-focused businesses, including strategic planning, impact measurement, community engagement strategies, and business development support."
    },
    {
      id: 2,
      question: "How will your approach help my organization?",
      answer: "Our team blends business expertise with a focus on social and environmental impact. We tailor solutions that help you make a real difference in your community while ensuring financial sustainability."
    },
    {
      id: 3,
      question: "Which types of organizations do you work with?",
      answer: "We partner with nonprofits, cooperatives, charities, and socially driven for-profit enterprises across various sectors—like health, education, and the environment."
    },
    {
      id: 4,
      question: "Do you only work with established organizations?",
      answer: "Not at all. Whether you're just getting started with a social enterprise idea or looking to scale an existing initiative, we can guide you every step of the way."
    }
  ];

  const rightFaqs = [
    {
      id: 5,
      question: "Are your programs customized?",
      answer: "Absolutely! Every organization has unique needs, so we tailor our consulting, workshops, and coaching sessions to help you reach your specific mission and goals."
    },
    {
      id: 6,
      question: "How important is measuring impact?",
      answer: "Measuring your social or environmental impact is vital for proving your value to funders, stakeholders, and the community. We'll guide you in selecting the right metrics and tools."
    },
    {
      id: 7,
      question: "How do you ensure long-term sustainability?",
      answer: "Our strategies balance financial viability with social good, ensuring that you can continue making a positive impact for years to come."
    },
    {
      id: 8,
      question: "How soon can we expect results?",
      answer: "Timelines vary based on your project's complexity, but many organizations begin seeing improvements in community engagement and operational efficiency within a few months."
    }
  ];

  return (
    <section className="pt-[150px] pb-[115px] bg-[#f4f5fc]">
      <div className="container px-4 mx-auto">
        {/* Section Title */}
        <div className="text-center mb-[30px]">
          <h2 className="text-4xl font-bold">Your Questions, Answered!</h2>
        </div>

        <div className="flex flex-col lg:flex-row">
          {/* Left Column FAQ */}
          <div className="w-full lg:w-1/2 lg:pr-[33px]">
            <div className="space-y-4">
              {leftFaqs.map((faq) => (
                <div 
                  key={faq.id}
                  className={`border-b border-[#d5dcf7] ${activeIndex === faq.id ? 'active' : ''}`}
                >
                  <button
                    className={`w-full text-left py-[25px] pl-[68px] relative text-[20px] font-medium text-[#212877] tracking-tight`}
                    onClick={() => toggleAccordion(faq.id)}
                  >
                    <span className={`absolute left-0 top-[14px] w-12 h-12 flex items-center justify-center border border-[#e9eced] rounded-lg shadow-[0_4px_4px_0_#eaecf8] bg-white ${activeIndex === faq.id ? 'bg-[#1438bc] text-white' : 'text-[#1438bc]'}`}>
                      {faq.id}
                    </span>
                    {faq.question}
                    <span className="absolute right-[10px] top-1/2 transform -translate-y-1/2">
                      {activeIndex === faq.id ? (
                        <span className="text-[#212877]">−</span>
                      ) : (
                        <span className="text-[#212877]">+</span>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeIndex === faq.id ? 'max-h-[200px]' : 'max-h-0'}`}>
                    <div className="pb-[25px] pl-[68px] pr-[70px]">
                      <p className="text-[#212877]">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column FAQ */}
          <div className="w-full lg:w-1/2 lg:pl-[33px] mt-8 lg:mt-0">
            <div className="space-y-4">
              {rightFaqs.map((faq) => (
                <div 
                  key={faq.id}
                  className={`border-b border-[#d5dcf7] ${activeIndex === faq.id ? 'active' : ''}`}
                >
                  <button
                    className={`w-full text-left py-[25px] pl-[68px] relative text-[20px] font-medium text-[#212877] tracking-tight`}
                    onClick={() => toggleAccordion(faq.id)}
                  >
                    <span className={`absolute left-0 top-[14px] w-12 h-12 flex items-center justify-center border border-[#e9eced] rounded-lg shadow-[0_4px_4px_0_#eaecf8] bg-white ${activeIndex === faq.id ? 'bg-[#1438bc] text-white' : 'text-[#1438bc]'}`}>
                      {faq.id}
                    </span>
                    {faq.question}
                    <span className="absolute right-[10px] top-1/2 transform -translate-y-1/2">
                      {activeIndex === faq.id ? (
                        <span className="text-[#212877]">−</span>
                      ) : (
                        <span className="text-[#212877]">+</span>
                      )}
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${activeIndex === faq.id ? 'max-h-[200px]' : 'max-h-0'}`}>
                    <div className="pb-[25px] pl-[68px] pr-[70px]">
                      <p className="text-[#212877]">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-[70px]">
          <a href="#!" className="relative inline-block overflow-hidden group">
            <div className="absolute inset-0 hidden group-hover:block">
              <span className="absolute inset-0 flex items-center justify-center text-white">
                Book a Discovery Call
              </span>
            </div>
            <div className="relative flex items-center px-6 py-3 bg-[#1438bc] rounded-full text-white">
              <span className="block group-hover:hidden">Book a Discovery Call</span>
              <div className="ml-3 w-8 h-8 flex items-center justify-center rounded-full bg-white group-hover:bg-[#53baff] transition">
                <span className="text-[#1438bc] group-hover:text-white">+</span>
              </div>
              <span className="hidden ml-3 group-hover:block">Book a Discovery Call</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Faq;