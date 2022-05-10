import express from "express";

import linkController from "../controllers/links.js";

const router = express.Router();

router.get("/:id", linkController.getLinkById);
router.post("/", linkController.createLink);
router.put("/:id", linkController.updateLink);
router.delete("/:folderID/:linkID", linkController.deleteLink);

export default router;
