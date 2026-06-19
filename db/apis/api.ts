import connectDB from "../connection";
import { Knowledge } from "../models/philosopher";
import { Post } from "../models/post";

// const getPastPosts
// const sendPOST
// getPhilsopher
// 
export const sendPOST = async (data: any) => {
    await connectDB()
    try {
        const { content, type, philosopher, framework, topic, format } = data;
        const p = await Knowledge.findOne({ philosopher: philosopher });
        if (!p) {
            return false;
        }
        const phil = await Knowledge.findOneAndUpdate({ philosopher: philosopher }, { $inc: { timesUsed: 1 }, lastUsed: new Date() });
        const newPost = new Post({ content, type, philosopher, framework, topic, format });
        await newPost.save();
        return true;
    } catch (error) {
        console.error("Error saving post:", error);
        return false;
    }
}

export const getPastPosts = async () => {
    await connectDB()
    try {
        const posts = await Post.find({}).sort({ createdAt: -1 }).limit(10);
        return posts;
    } catch (error) {
        console.error("Error getting posts:", error);
        return [];
    }
}

export const getRandomPhilsopher = async () => {
    await connectDB()
    try {
        const dynamicSelection = await Knowledge.find({})
            .sort({ timesUsed: 1, lastUsed: 1 })
            .limit(5);

        // Pick a random one out of the bottom 5 to maintain unpredictability
        const chosenSource = dynamicSelection[Math.floor(Math.random() * dynamicSelection.length)];
        if (!chosenSource) {
            return null;
        }
        // 2. Randomly select a topic and framework from its arrays
        const chosenTopic = chosenSource.topics[Math.floor(Math.random() * chosenSource.topics.length)];
        const chosenFramework = chosenSource.frameworks[Math.floor(Math.random() * chosenSource.frameworks.length)];
        return {
            philosopher: chosenSource.philosopher,
            topic: chosenTopic,
            framework: chosenFramework
        };
    } catch (error) {
        console.error("Error getting philosopher:", error);
        return null;
    }
}



export const createKnowledge = async (philosopher: string, region: string, frameworks: string[], topics: string[]) => {
    await connectDB()
    try {
        const newKnowledge = new Knowledge({ philosopher, region, frameworks, topics });
        await newKnowledge.save();
        return true;
    } catch (error) {
        console.error("Error creating knowledge:", error);
        return false;
    }
}

export const insertManyPhil = async (data: typeof Knowledge[]) => {
    await connectDB()
    try {
        const newKnowledge = await Knowledge.insertMany(data);
        return true;
    } catch (error) {
        console.error("Error inserting knowledge:", error);
        return false;
    }
}

// // Step 1
// Get last 30 posts

// // Step 2
// Find philosophers not recently used

// // Step 3
// Randomly select one

// // Step 4
// Randomly select topic

// // Step 5
// Randomly select format

// // Step 6
// Generate