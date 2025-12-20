"use server";

import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getFinancialAdvice = async (transactions: string) => {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-2.0-flash", // Updated to a stable model name if needed, or keeping user's choice
            contents: `Analiza estas transacciones financieras y dame 3 consejos cortos y accionables para mejorar mis ahorros:\n${transactions}`,
            config: {
                systemInstruction: "Eres un asesor financiero experto, amable y directo. Tu respuesta debe estar en español.",
                temperature: 0.7,
                responseMimeType: "application/json",
                responseSchema: {
                    type: Type.ARRAY,
                    items: {
                        type: Type.OBJECT,
                        properties: {
                            title: { type: Type.STRING },
                            advice: { type: Type.STRING },
                            impact: { type: Type.STRING, description: "Bajo, Medio, o Alto" }
                        },
                        required: ["title", "advice", "impact"]
                    }
                }
            }
        });

        return JSON.parse(response.text || "[]");
    } catch (error) {
        console.error("Gemini analysis error:", error);
        return [];
    }
};
