import { createGroq } from "@ai-sdk/groq";
import loadenv from "dotenv"
loadenv.config()
const groq = createGroq({
    apiKey: process.env.GROQ_API_KEY,
})

export const model = groq("qwen/qwen3-32b");