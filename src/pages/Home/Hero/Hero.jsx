import React from "react";

const Hero = () => {
  return (
    <div>
      <div
        className="hero h-[300px] sm:h-[300px] md:h-[350px] lg:h-[400px]"
        style={{
          backgroundImage:
            "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
        }}
      >
        <div className="hero-overlay bg-black bg-opacity-80"></div>
        <div className="hero-content text-neutral-content text-center px-4">
          <div className="">
            <h1 className="mb-4 text-3xl sm:text-4xl md:text-6xl font-bold">
              MIST INNOVATION CLUB <br /> 
            </h1>
            
            <p className="mb-4 text-sm sm:text-base md:text-3xl px-20 font-semibold">
              <span className="text-blue-400 italic">"Innovate to Serve"</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
