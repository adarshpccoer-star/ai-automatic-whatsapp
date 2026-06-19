import { StateGraph, START, END } from "@langchain/langgraph";

import { AgentState } from "./state";

import {
    genrateQuote,
    router,
    type1,
    type2,
    type3,
    type4,
} from "../agent/nodes";
import { savePost, selectKnowledge } from "./tools/db";


const workflow = new StateGraph(AgentState)

    // Step 1
    .addNode("selectKnowledge", selectKnowledge)

    // Step 2
    .addNode("Genquote", genrateQuote)

    .addNode("type1", type1)
    .addNode("type2", type2)
    .addNode("type3", type3)
    .addNode("type4", type4)

    // Step 3
    .addNode("savePost", savePost)

    // Start
    .addEdge(START, "selectKnowledge")

    // Route based on time
    .addConditionalEdges(
        "selectKnowledge",
        router,
        {
            quote: "Genquote",
            type1: "type1",
            type2: "type2",
            type3: "type3",
            type4: "type4"
        }
    )

    // Everything saves
    .addEdge("Genquote", "savePost")

    .addEdge("type1", "savePost")
    .addEdge("type2", "savePost")
    .addEdge("type3", "savePost")
    .addEdge("type4", "savePost")

    // Finish
    .addEdge("savePost", END);

export default workflow.compile();