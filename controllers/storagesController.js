const fs = require('fs');
const { matchedData } = require('express-validator');
const { storagesModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const PUBLIC_URL = process.env.PUBLIC_URL;
const MEDIA_PATH = `${__dirname}/../storage`;
/**
 * Obtener una lista
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
    try {
        const data = await storagesModel.find({})
        res.send({ data })

    } catch (error) {
        handleHttpError(res, "OCURRIO UN ERROR AL OBTENET STORAGES")
    }
}

/**
 * Obtener elemento 
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
    try {
        const { id } = matchedData(req);
        const data = await storagesModel.findById(id)
        res.send({ data })
    } catch (error) {
        handleHttpError(res, "OCURRIO UN ERROR AL OBTENER STORAGE DETALLE")
    }

}

/**
 * Crear un item
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
    const { body, file } = req;
    console.log({ body, file });
    const fileData = {
        filename: file.filename || undefined,
        url: `${PUBLIC_URL}/${file.filename}`
    }
    const data = await storagesModel.create(fileData);
    res.send({ data })
}

/**
 * Actualizar Elemento NO SE VA APLICAR EL ACTUALIZAR 
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {

}

/**
 * Eliminar elemento
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
    try {
        const { id } = matchedData(req);
        //BUSCAMOS EL ID QUE REGRESA DE LA CONSULTA A MONGODB
        const dataFile = await storagesModel.findById(id);
        //ELIMINAMOS EL REGISTRO EN MONGODB
        await storagesModel.deleteOne(id);

        //OBTENEMOS LA RUTA DEL ARCHIVO MP3 PNG O JPG
        const { filename } = dataFile;
        //ELIMINAMOS EL REGISTRO DE MANERA FISICA QUE SE ENCUNTRA EN LA CARPETA DE STORAGE
        const filePath = `${MEDIA_PATH}/${filename}`; //TODO:PROYECTO RUTA EN STORAGE
        //COMENTAR ESTA LINEA PARA MANTENER EL DELETE SOFT Y EN LINEA 74 CAMBIAR EL deleteOne a delete({_id:id})
        fs.unlinkSync(filePath);
        //RETORNAMOS  LA RUTA DEL FILE 
        const data = {
            filePath,
            deleted: 1
        }
        res.send({ data });
    } catch (error) {
        handleHttpError(res, "OCURRIO UN ERROR AL OBTENER STORAGE DETALLE")
    }

}


module.exports = {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
}