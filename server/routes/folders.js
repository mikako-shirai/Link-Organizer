import express from "express";

import folderController from "../controllers/folders.js";

const router = express.Router();

router.get("/", folderController.getAllFolders);
router.get("/:id", folderController.getFolderById);
router.post("/", folderController.createFolder);

export default router;
