// controllers/caregiverController.js

import db from "../config/db.js";

// Buscar todos os cuidadores com address, features e services
export const getCaregivers = async (req, res) => {
  try {
    const [rows] = await db.query(`
      SELECT 
        u.*,
        c.*,
        a.*,
        f.*,
        s.*
      FROM caregivers c
      INNER JOIN users    u on u.id = c.user_id 
      LEFT JOIN caregiver_addresses a ON c.id = a.caregiver_id
      LEFT JOIN caregiver_features f ON c.id = f.caregiver_id
      LEFT JOIN caregiver_services s ON c.id = s.caregiver_id
    `);

    res.json(rows);
  } catch (error) {
    console.error("Erro ao buscar cuidadores:", error);
    res.status(500).json({ message: "Erro no servidor" });
  }
};

// Buscar cuidador específico por ID com address, features e services
export const getCaregiverById = async (req, res) => {
  try {
    const { id } = req.params;
    const [rows] = await db.query(`
      SELECT 
        c.*,
        a.*,
        f.*,
        s.*
      FROM caregivers c
      LEFT JOIN caregiver_address a ON c.id = a.caregiver_id
      LEFT JOIN caregiver_features f ON c.id = f.caregiver_id
      LEFT JOIN caregiver_services s ON c.id = s.caregiver_id
      WHERE c.id = ?
    `, [id]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "Cuidador não encontrado" });
    }

    res.json(rows[0]);
  } catch (error) {
    console.error("Erro ao buscar cuidador:", error);
    res.status(500).json({ message: "Erro no servidor" });
  }
};
