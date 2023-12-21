import React from "react";





const Hero = ({ title, breadCrumbs}) => {
  return (
    <div className="h-[100vh] bg-[url('/assets/hero-design.svg')] bg-cover bg-bottom">
      <div className="w-full">
        <h1
          className={`text-[120px] text-center text-gray-900 
            text-transparent bg-clip-text bg-gradient-to-b from-[#BAB5B5] `}
        >
          {title}
        </h1>
      </div>

      <div
        className="relative rounded-[50px] h-[22rem] w-full bg-white
       bg-[url('/assets/hero-image.png')] bg-cover bg-no-repeat bg-center flex justify-center"
      >
        { breadCrumbs }
      </div>
    </div>
  );
};

export default Hero;
