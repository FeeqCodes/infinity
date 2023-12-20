import { GoogleGenerativeAI } from "@google/generative-ai";
import path, { join } from "path";
import fs from "fs";
import { writeFile } from "fs/promises";
import { promises as fsPromises } from "fs";

const API_KEY = process.env.GOOGLE_GENERATIVE_AI;
// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}
export async function POST(req) {
  // const { input }  = await req.json()

  // get Image
  const data = await req.formData();
  const file = data.get("file");
  const input = data.get("input");

  if (!file || !input) {
    return Response.json({ message: "No file Selected or input" });
  }
  console.log("image", file);
  console.log("prompt", input);

  const genAI = new GoogleGenerativeAI(API_KEY);

  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  // const prompt = "What kind of image is this ?";

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);
  //
  // const path = join(process.cwd(), "data/document_loaders", file.name);
  // await writeFile(path, buffer);
  // console.log("new path", path);

  const path = join(process.cwd(), "tmp");
  // await writeFile(path, buffer);

  if (!fs.existsSync(path)) {
    fs.mkdirSync(path, { recursive: true });
  }

  const fileName = file.name;
  const sanitizedFileName = fileName.replace(/[^a-zA-Z0-9_-]/g, "_");

  const dir = join(path, sanitizedFileName);

  // if (!fs.existsSync(dir)) {
  //   fs.writeFile(dir, buffer, (err) => {
  //     if (err) {
  //       console.log(err);
  //     }
  //   });
  // }
  try {
    await fsPromises.writeFile(dir, buffer);
    console.log("Temporary file created:", dir);
  } catch (error) {
    console.error("Error creating temporary file:", error);
  }

  const imageParts = [fileToGenerativePart(dir, "image/jpeg")];

  const result = await model.generateContent([input, imageParts]);
  const response = await result.response;
  const text = response.text();
  console.log(text);

  return Response.json({ output: text });
}
