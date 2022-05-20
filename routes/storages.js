const express = require('express');
const router = express.Router();
const uploadMiddleware = require('../utils/handleStorage');
const { createItem, getItems, updateItem, deleteItem, getItem } = require('../controllers/storagesController');
const { validatorGetItem } = require('../validators/storages');
/**
 * Obtener elementos
 */
router.get("/", getItems);

/**
 * Obtener elemento detalle
 */
router.get("/:id", validatorGetItem, getItem);

/**
 * Crear elemento
 */
router.post("/", uploadMiddleware.single("myFile"), createItem);
/**
 * Actualizar elemento
 */
router.put("/:id", validatorGetItem, updateItem);
/**
 * Eliminar elemento
 */
router.delete("/:id", validatorGetItem, deleteItem);


module.exports = router;