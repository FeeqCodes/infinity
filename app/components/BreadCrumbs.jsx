import React from 'react'
import Links from './Links';


const BreadCrumbs = () => {
  return (
    <div className="bg-[#373333] absolute bottom-[-20%] w-[80%] h-[6rem] m-auto  bg-clip-padding backdrop-filter backdrop-blur-[7px] bg-opacity-[30%] rounded-[20px] flex gap-20 justify-center items-center">
      {/* Links */}
      <Links text="Chat Gemini" endpoint="/chat-gemini" />
      <Links text="Image-query" endpoint="/image-search" />
      <Links text="Research" endpoint="/image-search" />
    </div>
  );
}

export default BreadCrumbs