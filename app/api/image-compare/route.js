/**
 * Comparing two images
 */
const { GoogleGenerativeAI } = require("@google/generative-ai");
const fs = require("fs");
const { join } = require("path");

// Access your API key as an environment variable (see "Set up your API key" above)
const genAI = new GoogleGenerativeAI(process.env.GOOGLE_GENERATIVE_AI);

// Converts local file information to a GoogleGenerativeAI.Part object.
function fileToGenerativePart(path, mimeType) {
  return {
    inlineData: {
      data: Buffer.from(fs.readFileSync(path)).toString("base64"),
      mimeType,
    },
  };
}

export async function POST() {
  // get Image
  const data = await req.formData();
  const files = data.get("files");
  console.log(files);

  if (files.length !== 2) {
    throw new Error("you need to select two files");
  }
  // For text-and-image input (multimodal), use the gemini-pro-vision model
  const model = genAI.getGenerativeModel({ model: "gemini-pro-vision" });

  const prompt =
    "Compare this two images and tell me if they are similar or not.";

  const bytes1 = await files[0].arrayBuffer();
  const buffer1 = Buffer.from(bytes1);
  //   Second file
  const bytes2 = await files[0].arrayBuffer();
  const buffer2 = Buffer.from(bytes2);

  const path1 = join(process.cwd(), "tmp", files[0].name);
  const path2 = join(process.cwd(), "tmp", files[1].name);

  if (!fs.existsSync(path1 && path2)) {
    fs.mkdirSync([path1, path2], { recursive: true });
  }

  const fileName1 = files[0].name;
  const fileName2 = files[1].name;

  const sanitizedFileName1 = fileName1.replace(/[^a-zA-Z0-9_-]/g, "_");
  const sanitizedFileName2 = fileName2.replace(/[^a-zA-Z0-9_-]/g, "_");

  const dir1 = join(path1, sanitizedFileName1);
  const dir2 = join(path1, sanitizedFileName2);

  //   Write file to tmp
  try {
    await fsPromises.writeFile(dir1, buffer1);
    console.log("Temporary file created:", dir1);
    // Second file
    await fsPromises.writeFile(dir2, buffer2);
    console.log("Temporary file created:", dir2);
  } catch (error) {
    console.error("Error creating temporary file:", error);
  }
  //   Compare Images
  const imageParts = [
    fileToGenerativePart(dir1, "image/jpeg"),
    fileToGenerativePart(dir2, "image/jpeg"),
  ];

  const result = await model.generateContent([prompt, ...imageParts]);
  const response = await result.response;
  const text = response.text();
  console.log(text);
}
