const Joi = require('joi');

const createPetSchema = Joi.object({
  name: Joi.string()
    .min(1)
    .max(30)
    .required()
    .messages({
      'string.empty': 'Nome do pet é obrigatório',
      'string.min': 'Nome do pet deve ter pelo menos 1 caractere',
      'string.max': 'Nome do pet não pode exceder 30 caracteres'
    }),

  species: Joi.string()
    .valid('cachorro', 'gato', 'pássaro', 'roedor', 'outros')
    .required()
    .messages({
      'any.only': 'Espécie deve ser: cachorro, gato, pássaro, roedor ou outros',
      'string.empty': 'Espécie é obrigatória'
    }),

  breed: Joi.string()
    .max(50)
    .required()
    .messages({
      'string.empty': 'Raça é obrigatória',
      'string.max': 'Raça não pode exceder 50 caracteres'
    }),

  age: Joi.number()
    .integer()
    .min(0)
    .max(30)
    .messages({
      'number.min': 'Idade não pode ser negativa',
      'number.max': 'Idade não pode ser maior que 30 anos'
    }),

  weight: Joi.number()
    .min(0)
    .max(100)
    .messages({
      'number.min': 'Peso não pode ser negativo',
      'number.max': 'Peso não pode exceder 100kg'
    }),

  color: Joi.string().max(30),
  
  birth_date: Joi.date()
    .max('now')
    .messages({
      'date.max': 'Data de nascimento não pode ser futura'
    }),

  gender: Joi.string()
    .valid('macho', 'fêmea')
    .required()
    .messages({
      'any.only': 'Gênero deve ser macho ou fêmea',
      'string.empty': 'Gênero é obrigatório'
    }),

  temperament: Joi.string()
    .valid('calmo', 'agitado', 'amigável', 'arredio', 'agressivo')
    .default('calmo'),

  special_care: Joi.string().max(500),
  feeding_instructions: Joi.string().max(500),
  medication: Joi.string().max(500),
  veterinarian_contact: Joi.string().max(100),
  emergency_contact: Joi.string().max(100)
});

const updatePetSchema = Joi.object({
  name: Joi.string().min(1).max(30),
  species: Joi.string().valid('cachorro', 'gato', 'pássaro', 'roedor', 'outros'),
  breed: Joi.string().max(50),
  age: Joi.number().integer().min(0).max(30),
  weight: Joi.number().min(0).max(100),
  color: Joi.string().max(30),
  birth_date: Joi.date().max('now'),
  gender: Joi.string().valid('macho', 'fêmea'),
  temperament: Joi.string().valid('calmo', 'agitado', 'amigável', 'arredio', 'agressivo'),
  special_care: Joi.string().max(500),
  feeding_instructions: Joi.string().max(500),
  medication: Joi.string().max(500),
  veterinarian_contact: Joi.string().max(100),
  emergency_contact: Joi.string().max(100)
});

module.exports = {
  createPetSchema,
  updatePetSchema
};