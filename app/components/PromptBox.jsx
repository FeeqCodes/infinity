import React from "react";
import Button from "./Button";



const PromptBox = ({ handlePromptSubmit, handlePromptChange, prompt }) => {
  return (
    <div className="flex gap-x-5">
      <input
        value={prompt}
        onChange={handlePromptChange}
        // onKeyDown={handlePromptSubmit}
        className="py-6 pl-6 pr-16 w-[50%] h-8 rounded-[20px] border-2 border-[#CCC1C1] shadow-md shadow-[#333] text-black outline-none"
        placeholder="Send A Message"
      />

      <Button handlePromptSubmit={handlePromptSubmit} text="Click" />
    </div>
  );
};

export default PromptBox;
