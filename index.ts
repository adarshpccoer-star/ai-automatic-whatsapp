import app from "./src/agent/graph";

async function main() {
    try {
        console.log("🚀 Starting workflow...");

        // 1. Define the initial state (match the schema fields expected by your AgentState)
        const initialState = {
            quote: "",
            author: "",


            contentType: "",
            content: "",

            philosopher: "",
            framework: "",
            topic: "",
            region: "",

            recentPosts: []
        };

        const finalState = await app.invoke(initialState);

        // 3. Inspect the final output routed based on the current time
        console.log("\n✅ Workflow Completed Successfully!");
        console.log("Final State Results:", JSON.stringify(finalState, null, 2));

    } catch (error) {
        console.error("❌ Error running workflow:", error);
    }
}

main();