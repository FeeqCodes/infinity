"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import Column from "@/app/components/Column";

const ImageSearch = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState(null);

  const [messages, setMessages] = useState([
    {
      text: "Hi What will you like to search for today",
    },
  ]);

  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // const imageUrl = URL.createObjectURL(file);
      // setImage(imageUrl);

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

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
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: prompt, image: image },
      ]);

      setPrompt("");
      setIsLoading(true);

      // sending the prompt to the backend and initializing the response
      const response = await fetch("api/chat-route", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ input: prompt, image: image }),
        // cache:'no-store'
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

      // clear old Errors
      setError("");
    } catch (err) {
      console.log(err);
      setError(err);
    }
  };

  return (
    <>
      <div>{isLoading && <p>Loading...</p>}</div>

      <Column
        leftChildren={
          <div className="">
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {image && (
              <div>
                <Image
                  src={image}
                  alt="Uploaded Image"
                  width={300}
                  height={200}
                />
              </div>
            )}
          </div>
        }
        rightChildren={
          <div>
            {/* Message */}
            <div className="mb-5">
              {messages.map((message, index) => (
                <div key={index}>
                  <p>{message.text}</p>
                </div>
              ))}
            </div>
            {/* prompt*/}
            <div className="flex gap-x-5">
              <input
                value={prompt}
                onChange={handlePromptChange}
                // onKeyDown={handlePromptSubmit}
                className="py-6 pl-6 pr-16 w-[50%] h-8 rounded-[20px] border-2 border-[#CCC1C1] shadow-md shadow-[#333] text-black outline-none"
                placeholder="Send A Message"
              />
              <Button
                handlePromptSubmit={handlePromptSubmit} 
                text="Click" />
            </div>
          </div>
        }
      />
    </>
  );
};

export default ImageSearch;
