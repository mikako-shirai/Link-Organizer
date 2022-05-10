import express from "express";

import folderController from "../controllers/folders.js";

const router = express.Router();

router.get("/", folderController.getAllFolders);
router.get("/:id", folderController.getFolderById);
router.post("/", folderController.createFolder);
router.put("/:id", folderController.updateFolder);
router.delete("/:id", folderController.deleteFolder);

export default router;
