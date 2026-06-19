import mongoose from 'mongoose';

const knowledgeSchema = new mongoose.Schema({
    philosopher: {
        type: String,
        required: true,
        unique: true
    },
    region: { type: String }, // e.g., "Indian", "Stoic", "Japanese"
    frameworks: [{ type: String }], // e.g., ["Dichotomy of Control", "Amor Fati"]
    topics: [{ type: String }], // e.g., ["anxiety", "focus", "backlog"]
    timesUsed: { type: Number, default: 0 },
    lastUsed: { type: Date, default: null }
});

export const Knowledge = mongoose.model('Knowledge', knowledgeSchema);