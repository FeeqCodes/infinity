"use client";

import React, { useState } from "react";
import PromptBox from "@/app/components/PromptBox";
import Hero from "@/app/components/Hero";
import BreadCrumbs from "@/app/components/BreadCrumbs";
import PromptInput from "@/app/components/PromptInput";

const ChatGemini = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");

  const [messages, setMessages] = useState([
    {
      text: "Hi! what will you like to search for today",
      type: "bot"
    },
  ]);

  /**
   * whenever the promptBox value changes
   */
  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  //
  const handlePromptSubmit = async () => {
    console.log("Sending", prompt);

    try {
      setMessages((prevMessages) => [...prevMessages, { text: prompt }]);

      setPrompt("");
      setIsLoading(true);

      const response = await fetch("api/chat-gemini", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input: prompt }),
      });

      if (!response.ok) {
        throw new Error(`HTTP Error! Status: ${response.status}`);
      }

      // Getting the response from thr back end
      const searchRes = await response.json();

      setIsLoading(false);
      // Update the messages array with the received response
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: searchRes.output, type: "bot" },
      ]);

      console.log({ searchRes });
    } catch (err) {
      console.log(err);
    }
  };

  

  return (
    <>
      <div>{isLoading && <p>Loading...</p>}</div>

      <Hero title="CHAT GEMINI" breadCrumbs={<BreadCrumbs />} />

      <div className="mt-[10rem] w-full m-auto flex flex-col  items-center ">
        <div className="w-[40vw] max-w-[40vw]">
          <PromptBox
            messages={messages}
            prompt={prompt}
            handlePromptChange={handlePromptChange}
            handlePromptSubmit={handlePromptSubmit}
            isLoading={isLoading}
          />
          <PromptInput
            prompt={prompt}
            handlePromptChange={handlePromptChange}
            handlePromptSubmit={handlePromptSubmit}
          />
        </div>
      </div>
    </>
  );
};

export default ChatGemini;
