// 1. Inject the polyfill into global process BEFORE any imports are evaluated
if (typeof globalThis.process?.getBuiltinModule !== 'function') {
  if (!globalThis.process) (globalThis as any).process = {};
  
  (globalThis.process as any).getBuiltinModule = (moduleName: string) => {
    if (moduleName === 'v8') {
      return { startupSnapshot: { isBuildingSnapshot: () => false } };
    }
    return undefined;
  };
} else {
  // If the method exists, intercept the 'v8' call safely
  const originalGetBuiltin = globalThis.process.getBuiltinModule;
  globalThis.process.getBuiltinModule = function (moduleName: string) {
    if (moduleName === 'v8') {
      return { startupSnapshot: { isBuildingSnapshot: () => false } };
    }
    return originalGetBuiltin.call(this, moduleName);
  };
}

// 2. NOW safely import your LangGraph app
import app from "./src/agent/graph";
import mongoose from "mongoose"; // Ensure clean exits

async function main() {
    try {
        console.log("🚀 Starting workflow...");

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

        console.log("\n✅ Workflow Completed Successfully!");
        console.log("Final State Results:", JSON.stringify(finalState, null, 2));

    } catch (error) {
        console.error("❌ Error running workflow:", error);
    } finally {
        // 🌟 CRITICAL FOR GITHUB ACTIONS: Close connections so the runner terminates naturally
        await mongoose.disconnect();
        process.exit(0);
    }
}

main();
