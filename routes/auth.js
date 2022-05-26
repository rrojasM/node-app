const express = require('express');
const { registerUserController, loginUserController } = require('../controllers/authController')
const { validatorRegister, validatorLogin } = require('../validators/auth');
const router = express.Router();

router.post('/registro', validatorRegister, registerUserController);

module.exports = router;