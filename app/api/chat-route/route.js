import { join } from "path";
import { writeFile } from "fs/promises";
import fsPromises from "fs/promises";



export async function POST(req) {

  try {
    const data = await req.formData();
    const file = data.get("file");

    if (!file) {
      return Response.json({ message: "No file Selected" });
    }

    // const bytes = await file.arrayBuffer();
    //  const buffer = await fsPromises.readFile(file);

     const bytes = await file.arrayBuffer();
     const buffer = Buffer.from(bytes);

    const path = join(process.cwd(), "data/document_loaders", file.name);
    await writeFile(path, buffer);


    return Response.json({ message: "File Uploaded Successfully" });


  } catch (error){
    console.error("Error:", error.message);

    return Response.json({ message: "Error" });
  }


}



// import { GoogleGenerativeAI } from "@google/generative-ai";
// import path, { join } from "path";
// import fs from "fs";
// import {  writeFile } from "fs/promises";

// const API_KEY = process.env.GOOGLE_GENERATIVE_AI;

// export async function POST(req) {
//   // const { input }  = await req.json()

//   // get Image
//   const data = await req.formData();
//   const file = data.get("file");
//   console.log(file)

//   if (!file) {
//     throw new Error("No Input or image");
//   }

//   const buffer = Buffer.from(await file.arrayBuffer());
//   const filename = Date.now() + file.name.replaceAll(" ", "_");
//   console.log(filename);

//   await writeFile(
//     path.join(process.cwd(), "public/uploads/" + filename),
//     buffer
//   );

//   const genAI = new GoogleGenerativeAI(API_KEY);

//   const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

//   const generationConfig = {
//     temperature: 0.4,
//     topK: 32,
//     topP: 1,
//     maxOutputTokens: 4096,
//   };

//   prompt = "What type of image is this";

//   const parts = [
//     {
//       inlineData: {
//         mimeType: "image/jpeg",
//         data: Buffer.from(fs.readFileSync(path)).toString("base64"),
//       },
//     },
//     { text: prompt },
//   ];

//   const result = await model.generateContent({
//     contents: [{ parts }],
//     generationConfig,
//     // safetySettings,
//   });

//   const response = result.response;
//   const text = response.text();
//   console.log(text);

//   return Response.json({ output: text });
// }








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
