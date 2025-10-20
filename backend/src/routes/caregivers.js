// routes/caregiverRoutes.js

import express from "express";
import { getCaregivers, getCaregiverById } from "../controllers/caregiver.js";

const router = express.Router();

// Rota para listar todos os cuidadores
router.get("/", getCaregivers);

// Rota para buscar cuidador específico
router.get("/:id", getCaregiverById);

export default router;
