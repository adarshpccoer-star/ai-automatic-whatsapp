import dotenv from "dotenv";
dotenv.config();

export const sendPostMessage = async (message: any) => {
  try {
    if (!message) {
      throw new Error("The message is empty");
    }

    // 1. Strip out thinking tags from LLM outputs cleanly
    let cleanContent = message.replace(/<think>[\s\S]*?<\/think>/i, "").trim();

    if (!cleanContent) {
      throw new Error("Message became empty after cleaning symbols");
    }

    // Your production Render URL and static channel address
    const RENDER_API_URL = process.env.RENDER_API_URL;
    const CHANNEL_ID = process.env.CHANNEL_ID;
    if (!RENDER_API_URL || !CHANNEL_ID) {
      return;
    }
    const response = await fetch(RENDER_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        channelId: CHANNEL_ID,
        message: cleanContent,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    console.log(" Broadcast sent successfully via Render:", data);
    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error("❌ Automation routing error:", error.message);
    } else {
      console.error("❌ An unknown error occurred:", error);
    }
  }
};
