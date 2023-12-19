import React from "react";

const Button = ({ text, handlePromptSubmit }) => {
  return (
    <button onClick={handlePromptSubmit} className="p-4 px-6 bg-slate-500 text-white rounded-md">
      {text}
    </button>
  );
};

export default Button;
