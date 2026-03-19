import { Schema, model } from "mongoose";

const aiSuggestionSchema = new Schema(
  {
    venue: { type: String, required: true, trim: true },
    location: { type: String, required: true, trim: true },
    estimatedCost: { type: String, required: true, trim: true },
    whyItFits: { type: String, required: true, trim: true },
  },
  { _id: false },
);

const userRequestSchema = new Schema(
  {
    description: { type: String, required: true, trim: true },
    aiSuggestion: { type: aiSuggestionSchema, required: true },
    createdAt: { type: Date, default: Date.now() },
  },
  { versionKey: false },
);

export const UserRequest = model("UserRequest", userRequestSchema);
