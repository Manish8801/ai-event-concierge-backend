export const PORT = process.env.PORT!;
export const MONGO_INITDB_ROOT_USERNAME =
  process.env.MONGO_INITDB_ROOT_USERNAME!;
export const MONGO_INITDB_ROOT_PASSWORD =
  process.env.MONGO_INITDB_ROOT_PASSWORD!;
export const NODE_ENV = process.env.NODE_ENV;
export const MONGO_URI = process.env.MONGO_URI!;
export const CLIENT_ORIGIN = process.env.CLIENT_ORIGIN!;
export const BASE_URL = process.env.BASE_URL || "/api/v1";
export const GEMINI_API_KEY = process.env.GEMINI_API_KEY!;
export const GEMINI_API_VERSION = process.env.GEMINI_API_VERSION!;
export const EVENT_JSON_STRUCTURE = JSON.stringify({
  venue: "Real venue name",
  location:
    "Real ideal location and also add the location matching emoji if available",
  estimatedCost:
    "Estimated Cost in numbers and also add that money symbol accordingly if not provided that simply add rupees symbol",
  whyItFits: "Briefly justify why this fits the best.",
});
