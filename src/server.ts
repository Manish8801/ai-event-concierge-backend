import "dotenv/config";
import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import { BASE_URL, CLIENT_ORIGIN, PORT } from "./lib/constants.js";

const app = express();

// security
app.use(
  cors({
    origin: CLIENT_ORIGIN,
    methods: ["GET", "POST"],
  }),
);

// parsing body
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//routes
import eventRoutes from "./routes/events.js";
app.use(`${BASE_URL}/events`, eventRoutes);

// 404
app.use((_, res) => res.status(404).json({ message: "Route not found" }));

// start app
(async () => {
  await connectDB();
  app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
  });
})();
