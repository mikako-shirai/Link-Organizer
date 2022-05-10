import mongoose from "mongoose";
import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import path from "path";

import folderRoutes from "./routes/folders.js";
import linkRoutes from "./routes/links.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

app.use("/folders", folderRoutes);
app.use("/links", linkRoutes);

const PORT = process.env.PORT || 5000;

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => app.listen(PORT, () => console.log(`Server running on : http://localhost:${PORT}`)))
  .catch(err => console.error(err));
