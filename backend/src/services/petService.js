const { Pet, User } = require('../models');
const AppError = require('../utils/appError');

const createPet = async (petData, ownerId) => {
  // Verificar se usuário existe
  const owner = await User.findByPk(ownerId);
  if (!owner) {
    throw new AppError('Proprietário não encontrado', 404);
  }

  const pet = await Pet.create({
    ...petData,
    owner_id: ownerId
  });

  return pet;
};

const getUserPets = async (userId) => {
  const pets = await Pet.findAll({
    where: { owner_id: userId, is_active: true },
    order: [['name', 'ASC']]
  });

  return pets;
};

const getPetById = async (petId, userId) => {
  const pet = await Pet.findOne({
    where: { id: petId, owner_id: userId, is_active: true }
  });

  if (!pet) {
    throw new AppError('Pet não encontrado', 404);
  }

  return pet;
};

const updatePet = async (petId, userId, updateData) => {
  const pet = await Pet.findOne({
    where: { id: petId, owner_id: userId }
  });

  if (!pet) {
    throw new AppError('Pet não encontrado', 404);
  }

  await pet.update(updateData);

  return await Pet.findByPk(petId);
};

const deletePet = async (petId, userId) => {
  const pet = await Pet.findOne({
    where: { id: petId, owner_id: userId }
  });

  if (!pet) {
    throw new AppError('Pet não encontrado', 404);
  }

  // Soft delete
  await pet.update({ is_active: false });

  return { message: 'Pet removido com sucesso' };
};

const searchPets = async (userId, filters) => {
  const whereClause = { owner_id: userId, is_active: true };

  if (filters.species) {
    whereClause.species = filters.species;
  }

  if (filters.gender) {
    whereClause.gender = filters.gender;
  }

  if (filters.temperament) {
    whereClause.temperament = filters.temperament;
  }

  const pets = await Pet.findAll({
    where: whereClause,
    order: [['name', 'ASC']]
  });

  return pets;
};

module.exports = {
  createPet,
  getUserPets,
  getPetById,
  updatePet,
  deletePet,
  searchPets
};