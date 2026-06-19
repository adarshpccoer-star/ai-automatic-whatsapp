import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
    content: { type: String, required: true },
    type: { type: String, required: true }, // e.g., "morning_motivation", "night_reflection"
    philosopher: { type: String, required: true },
    framework: { type: String },
    topic: { type: String },
    format: { type: String }, // e.g., "Letter", "Battlefield Blueprint"
    createdAt: { type: Date, default: Date.now }
});

export const Post = mongoose.model('Post', postSchema);