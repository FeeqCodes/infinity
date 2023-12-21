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
        <div className="w-full ">
          <input
            value={prompt}
            onChange={handlePromptChange}
            onKeyDown={handleKeyDown}
            className="py-6 pl-6 pr-16 w-full h-8 rounded-2xl border-2 border-[#CCC1C1] shadow-md shadow-[#333] text-black outline-none"
            placeholder="Send A Message"
          />
        </div>
        <div className=" h-full   flex items-center mr-[3vw]">
          <Image
            onClick={handlePromptSubmit}
            width={20}
            height={10}
            alt=""
            src="/assets/send vector.png"
            className=" hover:cursor-pointer"
          ></Image>
        </div>
      </div>
    </>
  );
};

export default PromptInput;
