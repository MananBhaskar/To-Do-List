import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import todoRoutes from "./routes/todo.routes.js";
import authRoutes from "./routes/auth.js";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

// API routes
app.use("/api/todos", todoRoutes);
app.use("/api/users", authRoutes);

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));

  // ✅ Fix path-to-regexp error
  app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
  console.log(`Server started at http://localhost:${PORT}`);
});
