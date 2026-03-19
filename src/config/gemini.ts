import { GoogleGenAI } from "@google/genai";
import { GEMINI_API_KEY } from "../lib/constants.js";

const ai = new GoogleGenAI({
  apiKey: GEMINI_API_KEY,
});

export const generateStructuredJson = async (
  description: string,
  jsonStructure: string,
) => {
  const contents = `Only pass me the stringified json structure of this type "${jsonStructure}" in with the description "${description}" `;
  const structure = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents,
  });

  if (!structure.text) throw new Error("Error while generating structure");
  return structure.text;
};
