import { Annotation } from "@langchain/langgraph";

export const AgentState = Annotation.Root({
    quote: Annotation<string>(),
    author: Annotation<string>(),


    contentType: Annotation<string>(),
    content: Annotation<string>(),

    philosopher: Annotation<string>(),
    framework: Annotation<string>(),
    topic: Annotation<string>(),
    region: Annotation<string>(),

    recentPosts: Annotation<any[]>()

});
