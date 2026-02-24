import express from "express";
// import dotenv from "dotenv";

import notesRoutes from "./routes/notesRoutes.js";
import { createDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";

// dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;

//creating connection with MongoDB and then starting the app
createDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started successfully on PORT", PORT);
  });
});

//middleware
app.use(express.json());
app.use(rateLimiter);
app.use("/api/notes", notesRoutes);
