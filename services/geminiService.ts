import { GoogleGenAI } from "@google/genai";

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateCuteIcon = async (prompt: string): Promise<string> => {
  if (!apiKey) {
    throw new Error("API Key is missing");
  }

  // We strictly control the style to match the user's request:
  // "cute and simple style", "nano banana", matching the color palette.
  const stylePrompt = `
    Generate a cute, simple, chibi-style icon of ${prompt}.
    Style: Hand-drawn aesthetic, thick soft lines, minimalist, flat vector art style.
    Colors: Use a pastel palette specifically matching these hex codes: #FFDCDC (pink), #FFF2EB (cream), #FFE8CD (beige), #FFD6BA (dark beige), and dark brown lines.
    Background: Solid white or transparent.
    Vibe: Kawaii, adorable, friendly, soft.
    Do not add complex details or realistic shading. Keep it very simple.
  `;

  try {
    // Using the "nano banana" equivalent for image generation as requested
    // Mapping 'nano banana' to 'gemini-2.5-flash-image' as per instructions.
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: stylePrompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: "1:1",
        },
      },
    });

    // Extract image from response
    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        const base64EncodeString = part.inlineData.data;
        return `data:image/png;base64,${base64EncodeString}`;
      }
    }

    throw new Error("No image data found in response");
  } catch (error) {
    console.error("Error generating icon:", error);
    throw error;
  }
};
