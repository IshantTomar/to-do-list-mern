import express from "express";
import dotenv from "dotenv";
import router from "./routes/noteRoutes.js";
import { connectDB } from "./config/db.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001

connectDB();

express.json();

app.use("/api/notes", router);

app.listen(PORT, () => {
    console.log(`Server is running, http://localhost:${PORT}`);
});