import Navbar from "@/app/(global-layout)/Navbar";
import React from "react";

const ImageSearchLayout = ({ children }) => {
  return (
    <div className="max-w-[95vw] m-auto my-5">
      <Navbar />
      <div>{children}</div>
    </div>
  );
};

export default ImageSearchLayout;
