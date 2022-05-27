const { matchedData } = require('express-validator');
const { encrypt } = require('../utils/handlePassword');
const { tokenSign } = require('../utils/handleJwt');
const { usersModel } = require('../models');
const { handleHttpError } = require("../utils/handleError")

const registerUserController = async (req, res) => {
    try {
        req = matchedData(req);
        const password = await encrypt(req.password);
        const body = { ...req, password };
        const dataUser = await usersModel.create(body);

        const data = {
            token: await tokenSign(dataUser),
            user: dataUser
        }

        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR AL CREAR UN USUARIO", error)
    }

}

const loginUserController = async () => {

}

module.exports = { registerUserController, loginUserController };