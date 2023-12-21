import React from "react";
import Links from "./Links";

const Hero = () => {
  return (
    <div className="h-[100vh] bg-[url('/assets/hero-design.svg')] bg-cover bg-bottom">
      <div className="w-full">
        <h1
          className={`text-[120px] text-center text-gray-900 
            text-transparent bg-clip-text bg-gradient-to-b from-[#BAB5B5] `}
        >
          INFINITY AI
        </h1>
      </div>

      <div
        className="relative rounded-[50px] h-[22rem] w-full bg-white
       bg-[url('/assets/hero-image.png')] bg-cover bg-no-repeat bg-center flex justify-center"
      >
        <div className="bg-[#373333] absolute bottom-[-20%] w-[80%] h-[6rem] m-auto  bg-clip-padding backdrop-filter backdrop-blur-[7px] bg-opacity-[30%] rounded-[20px] flex gap-20 justify-center items-center">
          {/* Links */}
          <Links text="Research" endpoint="/image-search" />
          <Links text="Image-query" endpoint="/image-search" />
          <Links text="Research" endpoint="/image-search" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
