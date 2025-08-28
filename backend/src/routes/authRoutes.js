const express = require('express');
const { protect } = require('../middlewares/authMiddleware');
const authController = require('../controllers/authController');

const router = express.Router();

// 🔗 ROTAS PÚBLICAS
router.post('/register', authController.register); //Rota que registra o usuário
router.post('/login', authController.login); //Rota de login

// 🔗 ROTAS PROTEGIDAS
router.get('/profile', protect, authController.getProfile);

module.exports = router;