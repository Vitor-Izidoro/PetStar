import BaseModel from "./BaseModel.js";

class Pet extends BaseModel {
  constructor() {
    super("pets");
  }

  async getAll(owner_id = null) {
    const rows = owner_id
      ? await this.findAll("owner_id = ?", [owner_id])
      : await this.findAll();

    // desserializar JSON para o front
    return rows.map((pet) => ({
      ...pet,
      care: pet.care ? JSON.parse(pet.care) : [],
      gallery: pet.gallery ? JSON.parse(pet.gallery) : [],
    }));
  }

  async create(data) {
    const newData = {
      ...data,
      care: JSON.stringify(data.care || []),
      gallery: JSON.stringify(data.gallery || []),
    };
    return super.create(newData);
  }

  async update(id, data) {
    const newData = {
      ...data,
      care: JSON.stringify(data.care || []),
      gallery: JSON.stringify(data.gallery || []),
    };
    return super.update(id, newData);
  }
}

export default new Pet();
