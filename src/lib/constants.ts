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
  venue: "Decent venue name",
  location: "Think the ideal exact real world location",
  estimatedCost:
    "Estimated cost in number and currecny sign(dollar if not mentioned) less than and very close to the atual budget described",
  whyItFits: "Briefly justify why this location fits the best",
});
