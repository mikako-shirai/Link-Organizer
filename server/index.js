import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import folderRoutes from "./routes/folders.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/folders", folderRoutes);

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on : http://localhost:${PORT}`)))
  .catch(err => console.error(err));
