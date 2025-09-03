import Pet from "../models/Pet.js";

export const getAllPets = (owner_id) => Pet.getAll(owner_id);
export const getPet = (id) => Pet.findById(id);
export const createPet = (data) => Pet.create(data);
export const updatePet = (id, data) => Pet.update(id, data);
export const deletePet = (id) => Pet.delete(id);
