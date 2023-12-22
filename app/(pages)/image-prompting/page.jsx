"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/app/components/Button";
import Column from "@/app/components/Column";
import PromptBox from "@/app/components/PromptBox";
import PromptInput from "@/app/components/PromptInput";
import Hero from "@/app/components/Hero";
import BreadCrumbs from "@/app/components/BreadCrumbs";

const ImagePrompt = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [error, setError] = useState(null);

  const [messages, setMessages] = useState([
    {
      text: "Hi! Please upload an image and start asking questions on it",
      type: "bot"
    },
  ]);

  const [image, setImage] = useState();
  // const [imageUrl, setImageUrl] = useState()

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
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
      setMessages((prevMessages) => [...prevMessages, { text: prompt }]);

      setPrompt("");
      setIsLoading(true);

      // Sending the image
      const formData = new FormData();
      formData.set("file", image);
      formData.set("input", prompt);

      const response = await fetch("api/image-prompting", {
        method: "POST",
        body: formData,
        // headers: {
        //   "Content-Type": "multipart/form-data",
        // },
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

      <Hero title="Image Prompting" breadCrumbs={<BreadCrumbs />} />

      <Column
        leftChildren={
          <div className="">
            <input type="file" accept="image/*" onChange={handleImageChange} />
            {image && (
              <div>
                <Image
                  src={URL.createObjectURL(image)}
                  alt="Uploaded Image"
                  width={300}
                  height={200}
                />
              </div>
            )}
          </div>
        }
        rightChildren={
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
        }
      />
    </>
  );
};

export default ImagePrompt;

// {/* <div>
//             {/* Message */}
//             <div className="mb-5">
//               {messages.map((message, index) => (
//                 <div key={index}>
//                   <p>{message.text}</p>
//                 </div>
//               ))}
//             </div>

//             {/* prompt*/}
//             {/* <PromptBox
//               handlePromptChange={handlePromptChange}
//               handlePromptSubmit={handlePromptSubmit}
//               prompt={prompt}
//             /> */}
//             <input onChange={handlePromptChange} className="w-[25rem] rounded p-2 outline-none" placeholder="your search" />
//             <button onClick={handlePromptSubmit} className="p-2 px-4 bg-blue-600 text-black">Click</button>
//           </div> */}
