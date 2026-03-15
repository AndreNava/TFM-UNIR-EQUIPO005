import { GoogleGenAI, Type } from '@google/genai';

const geminiApiKey = import.meta.env.VITE_GEMINI_KEY;

export async function getMovieByQuery(query, apiKey=geminiApiKey) {

    const ai = new GoogleGenAI({ apiKey });

    try {
        const response = await ai.models.generateContent({
            model: "gemini-3-flash-preview",
            contents: query,
            config: {
                systemInstruction: "You only respond with the IMDb movie title in english based on a movie scene description, nothing else (e.g. 'The Godfather', 'Inception', 'The Dark Knight'). If you don't know the movie title, respond with 'Unknown'."
            }
        });

        if (!response.ok) {
            throw new Error('Hubo un error al tratar de obtener respuesta. Por favor intentalo mas tarde.');
        }
        
        return { error: false, message: response.text }
    } catch(error) {
        return { error: true, message: error.message }
    }
}