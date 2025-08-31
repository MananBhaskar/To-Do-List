import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import todoRoutes from "./routes/todo.routes.js";
<<<<<<< HEAD
import authRoutes from "./routes/auth.js";
import path from "path";

dotenv.config();

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());

// API routes
app.use("/api/todos", todoRoutes);
app.use("/api/users", authRoutes);
=======
import cors from "cors";
import path from "path";
const PORT = process.env.PORT || 5000;

dotenv.config();

const app = express();

app.use(express.json());
// app.use(cors());

app.use("/api/todos", todoRoutes);
>>>>>>> bcd9c64f61c748113f11fe5c4fa9d3a78688cc35

const __dirname = path.resolve();

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
<<<<<<< HEAD

  // ✅ Fix path-to-regexp error
  app.get("/*", (req, res) => {
=======
  app.get("*", (req, res) => {
>>>>>>> bcd9c64f61c748113f11fe5c4fa9d3a78688cc35
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(PORT, () => {
  connectDB();
<<<<<<< HEAD
  console.log(`Server started at http://localhost:${PORT}`);
=======
  console.log("Server started at http://localhost:5000");
>>>>>>> bcd9c64f61c748113f11fe5c4fa9d3a78688cc35
});
