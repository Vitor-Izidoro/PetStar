// routes/reservationRoutes.js

import express from "express";
import { getReservations, getReservationById } from "../controllers/reservation.js";

const router = express.Router();

// Lista todas as reservas
router.get("/", getReservations);

// Reserva específica
router.get("/:id", getReservationById);

export default router;
