

"use client";

import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import LoadingDots from "./LoadingDots";

const SearchBox = ({
  messages,
  error,
  isLoading,
}) => {
  const messagesContainerRef = useRef();

  

  useEffect(() => {
    if (messagesContainerRef.current) {
      const element = messagesContainerRef.current;
      element.scrollTop = element.scrollHeight;
    }
  }, [messages]);

  const maxMsgToScroll = 4;

  // console.log(messages.length);

  return (
    <>
      <form
        style={{ backgroundColor: "rgba(255, 255, 255, 0.83)" }}
        className="font-poppins text-[16px] w-full h-[70vh]  flex flex-col gap-5  items-end rounded-2xl  shadow-inner shadow-gray-900 text-black  overflow-clip py-1"
      >
        <div
          ref={messagesContainerRef}
          className=" h-full w-full overflow-y-scroll"
        >
          <div
            r
            className={`p-[1rem]  w-full flex gap-5 flex-col pb-10  ${
              messages.length <= maxMsgToScroll && "justify-end h-full"
            } `}
          >
            {messages &&
              messages.map((message, index) => {
                return message.type === "bot" ? (
                  <div key={index} className=" flex gap-3">
                    <Image
                      alt=""
                      width={100}
                      height={100}
                      src="/assets/brain.png"
                      className="w-[40px] h-[40px] rounded-full"
                    />
                    <div className="bg-white p-3  rounded-b-xl rounded-tr-xl  w-[60%] h-auto">
                      <p className="text-sm font-medium text-violet-500 mb-2">
                        Bot
                      </p>
                      <p>{message.text}</p>
                    </div>
                  </div>
                ) : (
                  <div className="w-full flex justify-end " key={index}>
                    <div className="bg-white p-3 rounded-b-xl rounded-tl-xl w-[70%]">
                      <p className="text-sm font-medium text-violet-500 mb-2">
                        You
                      </p>
                      <p>{message.text}</p>
                    </div>
                  </div>
                );
              })}

            {/* Loading State */}
            {isLoading && (
              <div className=" flex gap-3">
                <Image
                  alt=""
                  width={100}
                  height={100}
                  src="/assets/brain.png"
                  className="w-[40px] h-[40px] rounded-full"
                />
                <div className="bg-white p-3  rounded-b-xl rounded-tr-xl  w-[70%] h-full">
                  <p className="text-sm font-medium text-violet-500 mb-2">
                    Bot
                  </p>
                  <LoadingDots />
                </div>
              </div>
            )}
          </div>

          
        </div>
      </form>

      {/* Display Error gotten */}
      <p className={`mt-4 text-red-500 ${error ? "block" : "hidden"}`}> {}</p>
    </>
  );
};



export default SearchBox;

