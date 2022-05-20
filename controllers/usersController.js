const { matchedData } = require('express-validator')
const { usersModel } = require("../models");
const { handleHttpError } = require("../utils/handleError")

/**
 * Obtener una lista
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try {
        const data = await usersModel.find()
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR EN OBTENER USUARIOS", error)
    }

}
/**
 * Obtener elemento 
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await usersModel.findById(id);
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR AL OBTENER EL USUARIO")
    }

}

/**
 * Crear un item
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    try {
        const body = matchedData(req);
        const data = await usersModel.create(body);
        res.send({ data })

    } catch (error) {
        handleHttpError(res, "ERROR AL CREAR UN USUARIO")
    }

}

/**
 * Actualizar Elemento
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {
    try {
        const { id, ...body } = matchedData(req);
        const data = await usersModel.findOneAndUpdate(id, body);
        res.send({ data })

    } catch (error) {
        handleHttpError(res, "OCURRIO UN ERROR AL ACTUALIZAR UN USUARIO")
    }
}

/**
 * Eliminar elemento
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try {
        req = matchedData(req);
        const { id } = req;
        const data = await usersModel.delete({ _id: id });
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR AL ELIMINAR UN USUARIO")
    }

}


module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}