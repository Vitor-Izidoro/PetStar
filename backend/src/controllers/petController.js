import * as petService from "../services/petService.js";

export const getPets = async (req, res) => {
  try {
    const pets = await petService.getAllPets(req.query.owner_id);
    res.json(pets);
  } catch (error) {
    res.status(500).json({ message: "Erro ao buscar pets", error: error.message });
  }
};

export const getPet = async (req, res) => {
  try {
    const pet = await petService.getPet(req.params.id);
    if (!pet) {
      return res.status(404).json({ message: "Pet não encontrado" });
    }
    res.json(pet);
  } catch (error) {
    res.status(500).json({ message: `Erro ao buscar pet ${req.params.id}`, error: error.message });
  }
};

export const createPet = async (req, res) => {
  try {
    const pet = await petService.createPet(req.body);
    res.status(201).json(pet);
  } catch (error) {
    res.status(500).json({ message: "Erro ao criar pet", error: error.message });
  }
};

export const updatePet = async (req, res) => {
  try {
    const pet = await petService.updatePet(req.params.id, req.body);
    res.json(pet);
  } catch (error) {
    res.status(500).json({ message: `Erro ao atualizar pet ${req.params.id}`, error: error.message });
  }
};

export const deletePet = async (req, res) => {
  try {
    await petService.deletePet(req.params.id);
    res.json({ message: "Pet deletado", id: req.params.id });
  } catch (error) {
    res.status(500).json({ message: `Erro ao deletar pet ${req.params.id}`, error: error.message });
  }
};
