import express from "express";
import * as petController from "../controllers/petController.js";

const router = express.Router();

router.get("/", petController.getPets);
router.get("/:id", petController.getPet);
router.post("/", petController.createPet);
router.put("/:id", petController.updatePet);
router.delete("/:id", petController.deletePet);

export default router;
