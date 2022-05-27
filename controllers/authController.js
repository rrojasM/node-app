const { matchedData } = require('express-validator');
const { encrypt, compare } = require('../utils/handlePassword');
const { tokenSign } = require('../utils/handleJwt');
const { usersModel } = require('../models');
const { handleHttpError } = require("../utils/handleError")


/**
 * Este controlador se encarga de registrar un usuario 
 * @param {*} req 
 * @param {*} res 
 */
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
        console.log({ data });
    } catch (error) {
        console.log("ERROR =====>", error);
        handleHttpError(res, "ERROR AL CREAR UN USUARIO");
    }

}

/**
 * Este controllador logea a un usuario 
 * @param {*} req 
 * @param {*} res 
 */
const loginUserController = async (req, res) => {
    try {
        req = matchedData(req);
        const user = await usersModel.findOne({ email: req.email }).select('password name email role');
        if (!user) {
            handleHttpError(res, "USER NOT EXISTS" + 404);
            return;
        }
        hashPassword = user.password;
        const check = await compare(req.password, hashPassword);

        if (!check) {
            handleHttpError(res, "PASSWORD INVALID", 401);
            return;
        }

        user.set('password', undefined, { strict: false})
        const data = {
            token: await tokenSign(user),
            user
        }

        res.send({ data });

    } catch (error) {
        handleHttpError("ERROR EN EL LOGIN")
    }

}

module.exports = { registerUserController, loginUserController };