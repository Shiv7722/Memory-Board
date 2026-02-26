import express from "express";
import path from "path";
import cors from "cors";
import cookieParser from "cookie-parser";

import notesRoutes from "./routes/notesRoutes.js";
import authRoutes from "./routes/authRoutes.js";
import { createDB } from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import authMiddleware from "./middleware/authMiddleware.js";

const app = express();
const PORT = process.env.PORT;
const __dirname = path.resolve();

// console.log("current backend dir name", __dirname);

//middleware
// if (process.env.NODE_ENV !== "production") {
app.use(cors({ 
  origin: "http://localhost:5173",
  credentials: true,
  allowedHeaders: ["Content-Type", "Authorization", "x-auth-token"] 
}));
// }

app.use(express.json());
app.use(cookieParser());
app.use(rateLimiter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));
}

app.use("/api/auth", authRoutes);
app.use("/api/notes", authMiddleware, notesRoutes);

if (process.env.NODE_ENV === "production") {
  console.log(
    "path to frontend",
    path.join(__dirname, "../frontend", "dist", "index.html"),
  );
  app.use((req, res,) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

//creating connection with MongoDB and then starting the app
createDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started successfully on PORT", PORT);
  });
});
