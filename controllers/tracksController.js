const { matchedData } = require('express-validator');
const { tracksModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');

/**
 * Obtener una lista
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try {
        const data = await tracksModel.find()
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR EN OBTENER ELEMENTOS")
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
        const data = await tracksModel.findById(id);
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR AL OBTENER EL ELEMENTO")
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
        const data = await tracksModel.create(body);
        res.send({ data })

    } catch (error) {
        handleHttpError(res, "OCURRIO UN ERROR AL CREAR UN TRACK")
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
        const data = await tracksModel.findOneAndUpdate(id, body);
        res.send({ data })

    } catch (error) {
        handleHttpError(res, "OCURRIO UN ERROR AL ACTUALIZAR UN TRACK")
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
        const data = await tracksModel.delete({_id: id});
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "ERROR AL ELIMINAR  EL ELEMENTO")
    }

}


module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}