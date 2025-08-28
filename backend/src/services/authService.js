const { User } = require('../models');
const { generateToken } = require('../utils/tokenUtils');
const AppError = require('../utils/appError');

// 🎯 SERVICE - Lógica de negócio, acessa Model
const registerUser = async (userData) => {
  const existingUser = await User.findOne({ where: { email: userData.email } });
  if (existingUser) {
    throw new AppError('Email já cadastrado', 400);
  }

  const user = await User.create(userData);
  const token = generateToken(user.id);

  const userWithoutPassword = { ...user.toJSON() };
  delete userWithoutPassword.password;

  return { user: userWithoutPassword, token };
};

const loginUser = async (email, password) => {
  const user = await User.findOne({ 
    where: { email },
    attributes: { include: ['password'] }
  });

  if (!user || !(await user.comparePassword(password))) {
    throw new AppError('Email ou senha incorretos', 401);
  }

  const token = generateToken(user.id);
  const userWithoutPassword = { ...user.toJSON() };
  delete userWithoutPassword.password;

  return { user: userWithoutPassword, token };
};

const getProfile = async (userId) => {
  const user = await User.findByPk(userId, {
    attributes: { exclude: ['password'] }
  });

  if (!user) throw new AppError('Usuário não encontrado', 404);
  return user;
};

module.exports = {
  registerUser,
  loginUser,
  getProfile
};