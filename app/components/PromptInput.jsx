import React from "react";
import Image from "next/image";

const PromptInput = ({
  prompt,
//   handleKeyDown,
  handlePromptChange,
  handlePromptSubmit,
}) => {


  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handlePromptSubmit();
    }
  };

  return (
    <>
      {/* Prompt input */}
      <div className=" w-full mt-5">
        <div className="w-full relative flex justify-center items-center">
          <input
            value={prompt}
            onChange={handlePromptChange}
            onKeyDown={handleKeyDown}
            className="py-6 pl-6 pr-16 w-full h-8 rounded-2xl border-2 border-[#CCC1C1] shadow-md shadow-[#333] text-black outline-none"
            placeholder="Send A Message"
          />

          <Image
            onClick={handlePromptSubmit}
            width={20}
            height={10}
            alt=""
            src="/assets/send vector.png"
            className="absolute right-5 top-5 hover:cursor-pointer"
          ></Image>
        </div>
        <div className=" h-full bg-red-400  flex items-center mr-[3vw]"></div>
      </div>
    </>
  );
};

export default PromptInput;
