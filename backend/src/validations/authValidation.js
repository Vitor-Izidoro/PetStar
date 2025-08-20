const Joi = require('joi');

const registerSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(50)
    .required()
    .messages({
      'string.empty': 'Nome é obrigatório',
      'string.min': 'Nome deve ter pelo menos 2 caracteres',
      'string.max': 'Nome não pode exceder 50 caracteres'
    }),

  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'Email deve ser válido',
      'string.empty': 'Email é obrigatório'
    }),

  password: Joi.string()
    .min(6)
    .required()
    .messages({
      'string.min': 'Senha deve ter pelo menos 6 caracteres',
      'string.empty': 'Senha é obrigatória'
    }),

  phone: Joi.string()
    .pattern(/^(\d{10,11})$/)
    .required()
    .messages({
      'string.pattern.base': 'Telefone deve ter 10 ou 11 dígitos',
      'string.empty': 'Telefone é obrigatório'
    }),

  role: Joi.string()
    .valid('user', 'admin', 'veterinarian')
    .default('user')
    .messages({
      'any.only': 'Role deve ser user, admin ou veterinarian'
    })
});

const loginSchema = Joi.object({
  email: Joi.string()
    .email()
    .required()
    .messages({
      'string.email': 'Email deve ser válido',
      'string.empty': 'Email é obrigatório'
    }),

  password: Joi.string()
    .required()
    .messages({
      'string.empty': 'Senha é obrigatória'
    })
});

const updateProfileSchema = Joi.object({
  name: Joi.string()
    .min(2)
    .max(50)
    .messages({
      'string.min': 'Nome deve ter pelo menos 2 caracteres',
      'string.max': 'Nome não pode exceder 50 caracteres'
    }),

  phone: Joi.string()
    .pattern(/^(\d{10,11})$/)
    .messages({
      'string.pattern.base': 'Telefone deve ter 10 ou 11 dígitos'
    }),

  address_street: Joi.string().max(100),
  address_city: Joi.string().max(50),
  address_state: Joi.string().length(2),
  address_zip_code: Joi.string().max(9)
});

module.exports = {
  registerSchema,
  loginSchema,
  updateProfileSchema
};