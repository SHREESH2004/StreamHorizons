import { GoogleGenerativeAI } from "@google/generative-ai";
const GEMINI_API_KEY="AIzaSyCvNi3BtKQOikQeoBy4abMrCy2VxXCYfJg"
const genAI = new GoogleGenerativeAI(GEMINI_API_KEY);
const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction: `You are expert cinephile that knows everything about cinema.You name is Stream Horizon AI`
  });

  async function generateContent(prompt) {
    try {
      const result = await model.generateContent(prompt);
      return await result.response.text();
    } catch (error) {
      console.error("Error generating content:", error.message);
      return null; // Graceful handling
    }
  }
  
  async function main() {
    const prompt = "Just say Hello";
    const content = await generateContent(prompt);
  
    if (content) {
      console.log(content);
    } else {
      console.log("Failed to generate content.");
    }
  }
  
  main();
  
  export { generateContent };