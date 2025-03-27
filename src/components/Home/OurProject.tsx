// import React from "react";

const OurProject = () => {
  const projects = [
    {
      id: 1,
      image: "/images/projectimg1.png",
      title: "Tech Herrlica Kicks Off STEM Her Initiative to Ignite Girls' Passion for STEM",
      link: "#"
    },
    {
      id: 2,
      image: "/images/projectimg2.png",
      title: "Tech Herrlica Kicks Off STEM Her Initiative to Ignite Girls' Passion for STEM",
      link: "#"
    },
    {
      id: 3,
      image: "/images/projectimg3.png",
      title: "Tech Herrlica Kicks Off STEM Her Initiative to Ignite Girls' Passion for STEM",
      link: "#"
    }
  ];

  return (
    <section className="px-6 py-12 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-800">Our Projects</h2>
          <button className="px-6 py-2 border-2 border-[#5B913B] text-[#5B913B] rounded-full hover:bg-[#5B913B] hover:text-white transition">
            View All
          </button>
        </div>
        <p className="max-w-2xl mt-2 text-gray-600">
          At InnocuetHub We support digital literacy and technological resources, play a vital role in bridging the digital divide and empowering individuals and organizations. Here's an overview of the work and the impact we create:
        </p>
        <div className="grid gap-6 mt-6 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg overflow-hidden h-[500px] w-full max-w-[400px] mx-auto"> {/* Added width control */}
              <img src={project.image} alt={project.title} className="w-full h-[60%] object-cover" />
              <div className="p-4 h-[40%] flex flex-col justify-between">
                <h3 className="text-lg font-semibold text-gray-800">{project.title}</h3>
                <a href={project.link} className="text-[#6C6CE2] hover:underline mt-2 block">
                  Read More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurProject;
