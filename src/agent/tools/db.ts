import { getPastPosts, sendPOST } from "../../../db/apis/api";
import { Knowledge } from "../../../db/models/philosopher";
import type { AgentState } from "../state";
import { sendPostMessage } from "./whatsappChannel";

export const selectKnowledge = async (
    state: typeof AgentState.State
) => {

    const recentPosts = await getPastPosts();

    const recentPhilosophers = [
        ...new Set(
            recentPosts.map((p) => p.philosopher)
        )
    ];

    const candidates = await Knowledge.find({
        philosopher: {
            $nin: recentPhilosophers
        }
    })
        .sort({
            timesUsed: 1,
            lastUsed: 1
        })
        .limit(10);

    const selected =
        candidates[
        Math.floor(Math.random() * candidates.length)
        ];
    if (!selected) {
        return state;
    }
    const framework =
        selected.frameworks[
        Math.floor(
            Math.random() *
            selected.frameworks.length
        )
        ];

    const topic =
        selected.topics[
        Math.floor(
            Math.random() *
            selected.topics.length
        )
        ];

    return {
        ...state,
        philosopher: selected.philosopher,
        framework,
        topic,
        region: selected.region,
        recentPosts
    };

};


export const buildPrompt = (
    state: typeof AgentState.State,
    typePrompt: string
) => {

    const recentPosts = state.recentPosts
        .map(
            (p) =>
                `${p.philosopher} | ${p.framework} | ${p.topic}`
        )
        .join("\n");

    return `

${typePrompt}

SELECTED THINKER

Philosopher:
${state.philosopher}

Region:
${state.region}

Framework:
${state.framework}

Topic:
${state.topic}

RECENT POSTS

${recentPosts}

IMPORTANT

* Build the post around the selected framework.
* Do not use philosophers appearing in RECENT POSTS.
* Do not reuse ideas from RECENT POSTS.
* Convert the framework into practical exam strategy.
  `;
};
export const savePost = async (
    state: typeof AgentState.State
) => {
    try {
        let finalContent = state.content;

        // 1. Dispatch the message to your live WhatsApp Channel
        if (!state.content) {
            finalContent = `${state.quote} \n\n\n ${state.author}`;
            await sendPostMessage(finalContent);
        } else {
            await sendPostMessage(state.content);
        }

        // 2. Log the generated assets to your analytics/backend database
        await sendPOST({
            content: finalContent, // Logs what was actually sent
            type: state.contentType,
            philosopher: state.philosopher,
            framework: state.framework,
            topic: state.topic,
            format: state.contentType
        });

    } catch (error) {
        console.error("❌ Agent savePost transaction failed:", error instanceof Error ? error.message : error);
    }

    return state;
};