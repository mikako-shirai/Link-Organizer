import express from "express";

import folderRoutes from "../controllers/folders.js";

const router = express.Router();

router.get("/", folderRoutes.getAllFolders);
router.get("/:id", folderRoutes.getFolderById);

export default router;
