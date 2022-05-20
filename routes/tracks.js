const express = require('express');
const router = express.Router();
const {
    getItems,
    getItem,
    createItem,
    updateItem,
    deleteItem
} = require('../controllers/tracksController');
const { validatorCreateItem, validatorGetItem } = require('../validators/tracks');
const customHeader = require('../middleware/customHeader')

/**
 * Ruta para listar elementos
 */
router.get("/", getItems);

/**
 * Obtener detalle
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * Ruta para crear elementos 
 */
router.post("/", validatorCreateItem, createItem);

/**
 * Actualizar Registro 
 */
router.put("/:id", validatorGetItem, validatorCreateItem, updateItem);

/**
* Eliminar Registro
*/
router.delete("/:id", validatorGetItem, deleteItem);



module.exports = router;