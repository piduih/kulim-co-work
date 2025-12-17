import { GoogleGenAI, Chat } from "@google/genai";
import { Message } from "../types";

const SYSTEM_INSTRUCTION = `
You are "Kai", the friendly Community Manager AI for the Kulim Coworking Space. 
Your goal is to answer questions simply and helpfully (ELI5 style - Explain Like I'm 5, but professional).

Key Information about the Space:
- Location: Kulim, Kedah.
- Opening Hours (Walk-in/Daily): 9.30am - 6.00pm.
- Access for Monthly Members: 24/7 Access.
- Internet: Fast WiFi (Unifi 300Mbps).
- Amenities: Comfortable workspace, Surau (prayer room), Toilet, Mini Pantry.
- Target Audience: Programmers, side hustlers, students, freelancers.
- Vibe: Chill, productive, community-focused.
- Policy: "Bring your laptop. We’ve got the rest."

Pricing (if asked):
- Daily Pass: RM 25 / day
- Monthly Pass: RM 350 / month

If someone asks about booking, tell them they can just walk in for a daily pass, or click the "Get Membership" button for monthly.

Keep your responses concise, warm, and inviting. Use emojis sparingly but effectively.
`;

let chatSession: Chat | null = null;

export const initializeChat = (): Chat => {
  if (chatSession) return chatSession;

  try {
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
    chatSession = ai.chats.create({
      model: 'gemini-2.5-flash',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });
    return chatSession;
  } catch (error) {
    console.error("Failed to initialize Gemini:", error);
    throw error;
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  try {
    const chat = initializeChat();
    const result = await chat.sendMessage({ message });
    return result.text || "I'm having trouble thinking right now. Come by the office!";
  } catch (error) {
    console.error("Error sending message to Gemini:", error);
    return "Oops! I got a little confused. Please try again later.";
  }
};