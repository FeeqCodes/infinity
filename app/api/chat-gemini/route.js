import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI);

export async function POST(req) {
  console.log("in the backend")
  const { input } = await req.json()

  if (!input) {
    throw new Error("No Input ");
  }

  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(input);

  const response = await result.response;
  const text = response.text();
  // console.log(text)

  return Response.json({ output: text})

}
