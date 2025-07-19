const { GoogleGenerativeAI } = require('@google/generative-ai');


const ServerAIController = {
    // CallApi

    CallApiAI: async (req, res) => {
        try {
            const genAI = new GoogleGenerativeAI(process.env.API_KEY);
            const { prompt } = req.body;
            if (!prompt) return res.status(400).json({ message: "Prompt is required" });

            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const result = await model.generateContent(prompt);
            const response = await result.response;
            const reply = await response.text();
            console.log(genAI)
            return res.status(200).json({ reply });
        } catch (err) {
            console.error(" Error:", err.message);
            return res.status(500).json({ message: "Server error", error: err.message });
        }
    }
}
module.exports = ServerAIController;