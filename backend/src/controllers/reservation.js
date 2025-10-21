// controllers/reservationController.js

import db from "../config/db.js";

// Buscar todas as reservas com dados completos
export const getReservations = async (req, res) => {
  try {
    const [rows] = await db.query(`
    SELECT 
        r.*,
        ra.*
      FROM reservations r
      LEFT JOIN reservation_addresses ra ON r.id = ra.reservation_id
    `);

    console.log(rows);
    res.json(rows);

  } catch (error) {
    console.error("Erro ao buscar reservas:", error);
    res.status(500).json({ message: "Erro no servidor" });
  }
};

// Buscar reserva específica por ID
export const getReservationById = async (req, res) => {
  try {
    const { id } = req.params;

    const [rows] = await db.query(`
      
     SELECT 
        r.*,
        ra.*
      FROM reservations r
      LEFT JOIN reservation_addresses ra ON r.id = ra.reservation_id
      WHERE r.id = ?
    `, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Reserva não encontrada" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Erro ao buscar reserva:", error);
    res.status(500).json({ message: "Erro no servidor" });
  }
};
