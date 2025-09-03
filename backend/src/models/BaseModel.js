// models/BaseModel.js
import pool from "../config/db.js";

class BaseModel {
  constructor(tableName) {
    this.tableName = tableName;
  }

  async findAll(where = "", params = []) {
    let query = `SELECT * FROM ${this.tableName}`;
    if (where) query += ` WHERE ${where}`;
    query += " ORDER BY id DESC";

    const [rows] = await pool.execute(query, params);
    return rows;
  }

  async findById(id) {
    const [rows] = await pool.execute(
      `SELECT * FROM ${this.tableName} WHERE id = ?`,
      [id]
    );
    return rows[0];
  }

  async create(data) {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const placeholders = keys.map(() => "?").join(", ");

    const [result] = await pool.execute(
      `INSERT INTO ${this.tableName} (${keys.join(", ")}) VALUES (${placeholders})`,
      values
    );

    return this.findById(result.insertId);
  }

  async update(id, data) {
    const keys = Object.keys(data);
    const values = Object.values(data);
    const setClause = keys.map((key) => `${key} = ?`).join(", ");

    await pool.execute(
      `UPDATE ${this.tableName} SET ${setClause} WHERE id = ?`,
      [...values, id]
    );

    return this.findById(id);
  }

  async delete(id) {
    await pool.execute(`DELETE FROM ${this.tableName} WHERE id = ?`, [id]);
    return true;
  }
}

export default BaseModel;
