
import { GoogleGenerativeAI } from "@google/generative-ai";
import { join } from "path";
import fs from "fs"


// const {
//   GoogleGenerativeAI,
// } = require("@google/generative-ai");
// const fs = require("fs");

const MODEL_NAME = "gemini-pro-vision";
// const API_KEY = "process.env.GOOGLE_API_KEY";

export async function POST(req) {

  const { input }  = await req.json()

  const genAI = new GoogleGenerativeAI(
    "AIzaSyDlH0b50TBX-zcYRJJVD7Yc_pavqTe3-NQ"
  );
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 0.4,
    topK: 32,
    topP: 1,
    maxOutputTokens: 4096,
  };


   const path = join(process.cwd(), "data/document_loaders",  "pic.jpg"); 

  if (!fs.existsSync(path)) {
    throw new Error("Could not find images in current directory.");
  }

  const parts = [
    {
      inlineData: {
        mimeType: "image/jpeg",
        data: Buffer.from(fs.readFileSync(path)).toString("base64")
      }
    },
    {text: input},
  ];

  const result = await model.generateContent({
    contents: [{  parts }],
    generationConfig,
    // safetySettings,
  });

  const response = result.response;
  const text = response.text();
  console.log(text);

  return Response.json({output: text})
}











/**
 * Comparing two images
 */

// const { GoogleGenerativeAI } = require("@google/generative-ai");
// const fs = require("fs");
// const { join } = require("path");

// // Access your API key as an environment variable (see "Set up your API key" above)
// const genAI = new GoogleGenerativeAI("AIzaSyDlH0b50TBX-zcYRJJVD7Yc_pavqTe3-NQ");

// // Converts local file information to a GoogleGenerativeAI.Part object.
// function fileToGenerativePart(path, mimeType) {
//   return {
//     inlineData: {
//       data: Buffer.from(fs.readFileSync(path)).toString("base64"),
//       mimeType,
//     },
//   };
// }

// async function run() {
//   // For text-and-image input (multimodal), use the gemini-pro-vision model
//   const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

//   const prompt = "What kind of image is this ?";

//   const path1 = join(process.cwd(), "pic.jpg");
//   // const path2 = join(process.cwd(), "close.jpg");

//   const imageParts = [
//     fileToGenerativePart(path1, "image/jpeg"),
//     // fileToGenerativePart(path2, "image/jpeg"),
//   ];

//   const result = await model.generateContent([prompt, ...imageParts]);
//   const response = await result.response;
//   const text = response.text();
//   console.log(text);
// }

// run();