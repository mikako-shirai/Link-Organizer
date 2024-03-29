import express from "express";

import linkController from "../controllers/links.js";

const router = express.Router();

router.get("/", linkController.getAllLinks);
router.get("/:id", linkController.getLinkById);
router.post("/", linkController.createLink);
router.put("/:id", linkController.updateLink);
router.delete("/:id", linkController.deleteLink);

export default router;
