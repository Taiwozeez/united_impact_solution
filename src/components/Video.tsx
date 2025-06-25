// import React from 'react';

const Video = () => {
  return (
    <div className="bg-[#f4f5fc] pt-[75px]">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="container mx-auto">
        <div className="career_video">
          <video
            loop
            muted
            playsInline
            autoPlay
            poster="assets/img/about/ab-img01.jpg"
            className="w-full rounded-[20px] h-full object-cover max-h-[600px]"
          >
            <source
              src="https://troontechnologies.com/wp-content/uploads/2025/05/Compressed-Troon-Home-Page-Video-Clients-Showcase.webm"
              type="video/mp4"
            />
          </video>
        </div>
      </div>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Video;