// import React from 'react';

const AISection = () => {
  return (
    <section id="ai-solutions" className="py-12 px-4 bg-[#dde0ff]">
      <div className="flex justify-center max-w-6xl mx-auto">
        <div className="w-full max-w-[45rem] aspect-square sm:aspect-square bg-gradient-to-br from-[#c6afff] to-[#c3e0ff] rounded-full flex flex-col justify-center items-center p-6 sm:p-8">
          <h2 className="mb-4 text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-center text-[#1438bc]">
            AI-Driven Solutions,<br className="hidden sm:block" />
            Built for You
          </h2>
          <p className="max-w-[28rem] mb-6 sm:mb-8 text-sm sm:text-base leading-relaxed text-center text-[#1438bc]">
            We don't just develop software; we use AI to optimize solutions and help our clients harness AI to drive innovation and growth.
          </p>
          <a
            href="ai-solutions.html"
            className="inline-block px-6 py-3 text-white bg-[#1438bc] rounded-full text-sm sm:text-base hover:bg-[#0f2c9c] transition"
          >
            Learn More About AI Solutions →
          </a>
        </div>
      </div>
    </section>
  );
};

export default AISection;
