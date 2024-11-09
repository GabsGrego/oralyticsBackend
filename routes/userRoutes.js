const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authMiddleware = require('../middlewares/authMiddleware');

//rota para cadastro de usuario
router.post('/register', userController.registerUser);

//rota para login de usuario
router.post('/login', userController.loginUser);

//rota para buscar todos os usuarios
router.get('/users', userController.getUsers);

//rota para buscar usuario especifico
router.get('/users/:id', userController.getUserById);

//rota para buscar usuario por Token
router.get('/users/token', authMiddleware, userController.getUserByToken)

//rota para atualizar usuario
router.put('/users/:id', userController.updateUser);

//rota para deletar usuario
router.delete('/users/:id', userController.deleteUser);

module.exports = router;