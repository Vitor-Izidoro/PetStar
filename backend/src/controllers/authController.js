const asyncHandler = require('../utils/asyncHandler');
const { authValidation } = require('../validations');
const { authService } = require('../services');
const validate = require('../middlewares/validationMiddleware');

// 🎯 CONTROLLER - Gerencia HTTP, chama Service
const register = asyncHandler(async (req, res) => {
  const result = await authService.registerUser(req.body);
  
  res.status(201).json({
    success: true,
    message: 'Usuário criado com sucesso',
    data: result
  });
});

const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const result = await authService.loginUser(email, password);
  
  res.json({
    success: true,
    message: 'Login realizado com sucesso',
    data: result
  });
});

const getProfile = asyncHandler(async (req, res) => {
  const user = await authService.getProfile(req.user.id);
  
  res.json({
    success: true,
    data: user
  });
});

module.exports = {
  register: [validate(authValidation.registerSchema), register],
  login: [validate(authValidation.loginSchema), login],
  getProfile
};