import { Schema, model } from "mongoose";

const mockdata = new Schema({
  end_year: { type: Number, default: null },
  intensity: { type: Number, required: true },
  sector: { type: String, required: true },
  topic: { type: String, required: true },
  insight: { type: String, required: true },
  url: { type: String, required: true },
  region: { type: String, default: null },
  start_year: { type: Number, default: null },
  impact: { type: Number, default: null },
  added: { type: String, required: true },
  published: { type: String, required: true },
  country: { type: String, default: null },
  relevance: { type: Number, required: true },
  pestle: { type: String, required: true },
  source: { type: String, required: true },
  title: { type: String, required: true },
  likelihood: { type: Number, required: true },
});

export const MockData = model("MockData", mockdata);
