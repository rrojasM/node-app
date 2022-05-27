const { Router } = require('express');
const { registerUserController, loginUserController } = require('../controllers/authController')
const { validatorRegister, validatorLogin } = require('../validators/auth');

const router = Router();

router.post('/registro', validatorRegister,registerUserController);

module.exports = router;