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
const authMiddleware = require('../middleware/session');
const checkRol = require('../middleware/rol');

/**
 * Ruta para listar elementos
 */
router.get("/", authMiddleware, getItems);

/**
 * Obtener detalle
 */
router.get("/:id", authMiddleware, validatorGetItem, getItem);

/**
 * Ruta para crear elementos 
 */
router.post("/", authMiddleware, checkRol(["ADMIN"]), validatorCreateItem, createItem);

/**
 * Actualizar Registro 
 */
router.put("/:id", authMiddleware, validatorGetItem, validatorCreateItem, updateItem);

/**
* Eliminar Registro
*/
router.delete("/:id", authMiddleware, validatorGetItem, deleteItem);



module.exports = router;