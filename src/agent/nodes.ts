import { AgentState } from "./state";
import { model } from "../llm/env";
import { generateText, Output } from "ai";
import { systemPrompt, type1prompt, type2prompt, type3Prompt, type4Prompt, } from "./prompts"
import { z } from "zod"
import { buildPrompt } from "./tools/db";

// Helper function to remove the <think>...</think> blocks
const removeThinkingBlock = (text: string): string => {
    return text.replace(/<think>[\s\S]*?<\/think>\s*/g, "");
};

export const genrateQuote = async (state: typeof AgentState.State) => {
    try {
        const result = await generateText({
            model: model,
            system: systemPrompt,
            prompt: type1prompt,
            output: Output.object({
                schema: z.object({
                    quote: z.string().describe("the quote"),
                    author: z.string().describe("the author"),
                })
            })
        });

        return {
            ...state,
            quote: removeThinkingBlock(result.output.quote),
            author: removeThinkingBlock(result.output.author)
        };

    } catch (error) {
        console.error(error instanceof Error ? error.message : "Unknown error");
        return state;
    }
}

export const type1 = async (state: typeof AgentState.State) => {
    const prompt = buildPrompt(state, type1prompt);
    const { text } = await generateText({ model, system: systemPrompt, prompt });

    return {
        ...state,
        contentType: "type1",
        content: removeThinkingBlock(text) // Cleaned here
    };
};

export const type2 = async (state: typeof AgentState.State) => {
    const prompt = buildPrompt(state, type2prompt);
    const { text } = await generateText({ model, system: systemPrompt, prompt });

    return {
        ...state,
        contentType: "type2",
        content: removeThinkingBlock(text) // Cleaned here
    };
};

export const type3 = async (state: typeof AgentState.State) => {
    const prompt = buildPrompt(state, type3Prompt);
    const { text } = await generateText({ model, system: systemPrompt, prompt });

    return {
        ...state,
        contentType: "type3",
        content: removeThinkingBlock(text) // Cleaned here
    };
};

export const type4 = async (state: typeof AgentState.State) => {
    const prompt = buildPrompt(state, type4Prompt);
    const { text } = await generateText({ model, system: systemPrompt, prompt });

    return {
        ...state,
        contentType: "type4", // 💡 Note: Fixed a small typo here from "type2" to "type4"
        content: removeThinkingBlock(text) // Cleaned here
    };
};

export const router = (state: typeof AgentState.State): string => {
    try {
        // Force the hour extraction to match India Standard Time (IST)
        const formatter = new Intl.DateTimeFormat("en-US", {
            timeZone: "Asia/Kolkata",
            hour: "numeric",
            hour12: false
        });
        
        const hour = parseInt(formatter.format(new Date()), 10);
        console.log(`[Router] Current local hour in target timezone: ${hour}`);

        if (hour >= 5 && hour < 8) return "genrateQuote";
        if (hour >= 8 && hour < 12) return "type2";
        if (hour >= 12 && hour < 16) return "type1";
        if (hour >= 16 && hour < 20) return "type3";
        if (hour >= 20 || hour < 5) return "type4"; // Handles late night/early morning wrap-around

        return "type4";
    } catch (error) {
        console.error(error instanceof Error ? error.message : "Routing error");
        return "type4";
    }
};